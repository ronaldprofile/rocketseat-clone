import { prismaClient } from "../prisma";

interface User {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;

  about_me: string;
  avatar_url: string;
  github_url: string;
  linkedin_url: string;

  occupation: string;
  company: string;
  status: string;

  city: string;
  state: string;
  country: string;
}

export class CreateUserService {
  async execute(user: User) {
    const registeredUser = await prismaClient.user.create({
      data: {
        ...user
      }
    });

    return registeredUser;
  }
}
