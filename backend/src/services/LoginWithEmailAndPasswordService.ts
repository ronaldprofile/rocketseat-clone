import { prismaClient } from "../prisma";
interface UserCredentials {
  password: string;
  email: string;
}

export class LoginWithEmailAndPasswordService {
  async execute(accountCredentials: UserCredentials) {
    const { email, password } = accountCredentials;

    const accountFounded = await prismaClient.account.findFirst({
      where: {
        email,
        password,
      },

      include: {
        user: true,
      },
    });

    return accountFounded;
  }
}
