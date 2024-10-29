import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { EmailUnico } from '../validacao/emailUnicoValidator';

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  nome: string;

  @IsEmail(undefined, { message: 'O e-mail é inválido.' })
  @EmailUnico({ message: 'Digite um e-mail disponível. ' })
  email: string;

  @MinLength(6, { message: 'Senha deve possuir 6 caracteres.' })
  senha: string;
}
