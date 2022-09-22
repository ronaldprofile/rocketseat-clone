import { Request, Response } from "express";
import { GetAccountByIdService } from "../services/GetAccountByIdService";

export class GetAccountByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new GetAccountByIdService();
    const result = await service.execute(id);

    return response.json(result);
  }
}
