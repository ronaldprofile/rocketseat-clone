import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetUserController } from "./controllers/GetUserController";

const router = Router();

router.post("/signup", new CreateUserController().handle);
router.get("/user/:id", new GetUserController().handle);

export { router };
