import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailUnico } from '../validacao/emailUnicoValidator';

export class AtualizaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: 'O e-mail é inválido.' })
  @EmailUnico({ message: 'Digite um e-mail disponível. ' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'Senha deve possuir 6 caracteres.' })
  @IsOptional()
  senha: string;
}
