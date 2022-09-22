import { prismaClient } from "../prisma";

interface Account {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export class CreateAccountService {
  async execute(account: Account) {
    const { name, email, password, password_confirmation } = account;

    const accountCreated = await prismaClient.account.create({
      data: {
        name,
        email,
        password,
        password_confirmation,
      },
    });

    return accountCreated;
  }
}
