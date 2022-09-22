import { Request, Response } from "express";
import { CreateAccountService } from "../services/CreateAccountService";

interface Account {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export class CreateAccountController {
  async handle(request: Request, response: Response) {
    const account: Account = request.body;

    const { name, email, password, password_confirmation } = account;

    const service = new CreateAccountService();

    const result = await service.execute({
      name,
      email,
      password,
      password_confirmation,
    });

    return response.json(result);
  }
}
