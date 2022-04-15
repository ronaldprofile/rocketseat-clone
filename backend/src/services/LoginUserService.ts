import { prismaClient } from "../prisma";

interface UserCredentials {
  password: string;
  email: string;
}

export class LoginUserService {
  async execute(user: UserCredentials) {
    const userFounded = await prismaClient.user.findFirst({
      where: {
        email: user.email,
        password: user.password
      }
    });

    return userFounded;
  }
}
