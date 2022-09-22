import { prismaClient } from "../prisma";

export class GetAccountByIdService {
  async execute(accountId: string) {
    const account = prismaClient.account.findFirst({
      where: {
        id: accountId,
      },

      include: {
        user: true,
      },
    });

    return account;
  }
}
