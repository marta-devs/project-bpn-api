import type { UsuarioRepository } from "../../repositories/usuario-repositoy";
import jwt from "jsonwebtoken";
import { NotFoundError, UnauthorizedError } from "../../utils/api-errors";
import jwtConfig from "../../configs/jwt-config";
import type { MilitarRepository } from "../../repositories/militar-repository";
export interface LoginRepositoryInPut {
  username: string;
  nip: string;
  password: string;
}
export interface LoginRepositoryOutPut {
  usuario: {
    id: string;
    username: string;
    password: string;
    status: string;
    qrcode: string;
    funcao: string;
    militarId: string;
    createdAt: Date;
    updatedAt: Date;
  };
  token: string;
}

export class LogService {
  constructor(
    private readonly usuarioRepository: UsuarioRepository,
    private readonly militarRepository: MilitarRepository
  ) {}
  public async logar(
    loginRepositoryInPut: LoginRepositoryInPut
  ): Promise<LoginRepositoryOutPut | null | undefined> {
    if (loginRepositoryInPut.username) {
      const usuario = await this.usuarioRepository.buscarPorUsername(
        loginRepositoryInPut.username
      );
      if (!usuario) {
        throw new NotFoundError("Credencias invalidas");
      }
      if (loginRepositoryInPut.username !== usuario?.username) {
        throw new UnauthorizedError("Credencias invalidas ");
      }
      if (loginRepositoryInPut.password !== usuario?.password) {
        throw new UnauthorizedError("Credencias invalidas");
      }
      const token = jwt.sign({ userId: usuario.id }, jwtConfig.secret, {
        subject: "acessApi",
        expiresIn: jwtConfig.expiresIn,
      });
      return {
        usuario: { ...usuario },
        token,
      };
    }
  }
}
