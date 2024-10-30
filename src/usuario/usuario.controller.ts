import { Body, Controller, Get, Post } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criaUsuario(@Body() dadosDoUsuarios: CriaUsuarioDTO) {
    const usuarioEntity = new UsuarioEntity();
    usuarioEntity.email = dadosDoUsuarios.email;
    usuarioEntity.senha = dadosDoUsuarios.senha;
    usuarioEntity.nome = dadosDoUsuarios.nome;
    usuarioEntity.id = uuid();

    this.usuarioRepository.salvar(usuarioEntity);
    return { id: usuarioEntity.id, message: 'Usuário criado com sucesso!' };
  }

  @Get()
  async listaUsuarios() {
    return this.usuarioRepository.listar();
  }
}
