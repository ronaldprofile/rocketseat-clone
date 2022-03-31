import { prismaClient } from "../prisma";

interface User {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export class CreateUserService {
  async execute(userData: User) {
    const user = await prismaClient.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        password_confirmation: userData.password_confirmation
      }
    });

    return user;
  }
}
