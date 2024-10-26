import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
  private usuarioRepository = new UsuarioRepository();

  @Post()
  async criaUsuario(@Body() dadosDoUsuarios) {
    this.usuarioRepository.salvar(dadosDoUsuarios);
    return dadosDoUsuarios;
  }

  @Get()
  async listaUsuarios() {
    return this.usuarioRepository.listar();
  }
}
