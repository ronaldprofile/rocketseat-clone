import { prismaClient } from "../prisma";

interface User {
  name: string;
  occupation: string;
  company: string;
  status: string;

  city: string;
  state: string;
  country: string;
}

export class UpdateUserService {
  async execute(userId: string, user: User) {
    const updatedUser = prismaClient.user.update({
      where: { id: userId },
      data: {
        name: user.name,

        occupation: user.occupation,
        company: user.company,
        status: user.status,

        city: user.city,
        state: user.state,
        country: user.country
      }
    });

    return updatedUser;
  }
}
