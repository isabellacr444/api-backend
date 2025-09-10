// src/auth/jwt.strategy.ts

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  /**
   * O construtor da nossa estratégia JWT.
   * A função super() é crucial para configurar a estratégia.
   */
  constructor() {
    super({
      // 1. Onde o token estará na requisição?
      // Dizemos para extrair o token do cabeçalho de autorização como um "Bearer Token".
      // Ex: Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

      // 2. Devemos ignorar a expiração do token?
      // Deixamos como 'false' por segurança. Tokens expirados serão rejeitados.
      ignoreExpiration: false,

      // 3. Qual é a chave secreta para verificar a assinatura do token?
      // ESTA CHAVE PRECISA SER EXATAMENTE A MESMA que usamos no AuthModule.
      secretOrKey: 'SEU_SEGREDO_SUPER_SECRETO',
    });
  }

  /**
   * Este método é OBRIGATÓRIO.
   * O Passport o invoca DEPOIS de verificar que a assinatura do token é válida.
   * Ele decodifica o payload do token e o passa como argumento para este método.
   * @param payload - O conteúdo decodificado do token JWT (o que colocamos lá durante o login).
   */
  async validate(payload: any) {
    // O que este método retorna, o NestJS anexa ao objeto 'request' como 'req.user'.
    // No nosso caso, o payload contém o email e o 'sub' (ID do usuário).
    // Estamos retornando um objeto com esses dados para que possamos acessá-los
    // facilmente em nossos controllers protegidos.
    return { userId: payload.sub, email: payload.email };
  }
}