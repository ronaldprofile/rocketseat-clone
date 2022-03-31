import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, password_confirmation } = request.body;

    const service = new CreateUserService();
    const result = await service.execute({
      name,
      email,
      password,
      password_confirmation
    });

    return response.json(result);
  }
}
