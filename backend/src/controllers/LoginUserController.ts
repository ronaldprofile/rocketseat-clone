import { Request, Response } from "express";
import { LoginUserService } from "../services/LoginUserService";

interface UserCredentials {
  password: string;
  email: string;
}

export class LoginUserController {
  async handle(request: Request, response: Response) {
    const user: UserCredentials = request.body;
    const service = new LoginUserService();

    try {
      const result = await service.execute(user);

      if (!result) {
        return response.json({ message: "user not found" });
      }

      return response.json(result);
    } catch (error) {
      console.log(error);
    }
  }
}
