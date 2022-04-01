import { prismaClient } from "../prisma";

export class GetUserService {
  async execute(userId: string) {
    const user = prismaClient.user.findFirst({
      where: {
        id: userId
      }
    });

    return user;
  }
}
