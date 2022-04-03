import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

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

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const user: User = request.body;

    const service = new CreateUserService();
    const result = await service.execute({
      ...user
    });

    return response.json(result);
  }
}
