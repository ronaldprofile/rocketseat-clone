import { Request, Response } from "express";
import { LoginWithEmailAndPasswordService } from "../services/LoginWithEmailAndPasswordService";

interface UserCredentials {
  password: string;
  email: string;
}

export class LoginWithEmailAndPassworController {
  async handle(request: Request, response: Response) {
    const accountCredentials: UserCredentials = request.body;
    const { email, password } = accountCredentials;

    const service = new LoginWithEmailAndPasswordService();

    try {
      const result = await service.execute({
        email,
        password,
      });

      return response.json(result);
    } catch (error) {
      console.log(error);
    }
  }
}
