import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criaUsuario(@Body() dadosDoUsuarios: CriaUsuarioDTO) {
    this.usuarioRepository.salvar(dadosDoUsuarios);
    return dadosDoUsuarios;
  }

  @Get()
  async listaUsuarios() {
    return this.usuarioRepository.listar();
  }
}
