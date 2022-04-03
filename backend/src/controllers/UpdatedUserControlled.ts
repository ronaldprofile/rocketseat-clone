import { Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";

interface User {
  name: string;
  occupation: string;
  company: string;
  status: string;

  city: string;
  state: string;
  country: string;
}

export class UpdatedUserController {
  async handle(request: Request, response: Response) {
    const user: User = request.body;
    const { id } = request.params;

    const service = new UpdateUserService();
    const updatedUser = await service.execute(id, user);

    return response.json(updatedUser);
  }
}
