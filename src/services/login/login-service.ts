import type { UsuarioRepository } from "../../repositories/usuario-repositoy";
import jwt from "jsonwebtoken";
import { NotFoundError, UnauthorizedError } from "../../utils/api-errors";
import jwtConfig from "../../configs/jwt-config";
import type { MilitarRepository } from "../../repositories/militar-repository";
export interface LoginRepositoryInPut {
  login: string;
  password: string;
}
export interface LoginRepositoryOutPut {
  id: string;
  username: string;
  password: string;
  status: string;
  qrcode: string;
  funcao: string;
  militarId: string;
  createdAt: Date;
  updatedAt: Date;
  accessToken: string;
}

export class LogService {
  constructor(
    private readonly usuarioRepository: UsuarioRepository,
    private readonly militarRepository: MilitarRepository
  ) {}
  public async logar(
    loginRepositoryInPut: LoginRepositoryInPut
  ): Promise<LoginRepositoryOutPut | null | undefined> {
    const usuario = await this.usuarioRepository.buscarPorUsername(
      loginRepositoryInPut.login
    );
    const militar = await this.militarRepository.buscarPorNIP(
      loginRepositoryInPut.login
    );
    if (!militar && !usuario) {
      throw new NotFoundError("militar ou usuario nao encontrado");
    }

    if (
      loginRepositoryInPut.login !== usuario?.username &&
      loginRepositoryInPut.login !== militar?.NIP
    ) {
      throw new UnauthorizedError("credenciais invalidas 11");
    }

    if (
      loginRepositoryInPut.password !== usuario?.password &&
      loginRepositoryInPut.password !== militar?.usuario.password
    ) {
      throw new UnauthorizedError("credenciais invalidas 22");
    }
    const token = jwt.sign({ userId: usuario?.id }, jwtConfig.secret, {
      expiresIn: jwtConfig.expiresIn,
    });
    return {
      ...(usuario ? usuario : militar),
      accessToken: token,
    };
  }
}
