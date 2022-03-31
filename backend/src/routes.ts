import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const CreateUser = new CreateUserController();

router.post("/signup", CreateUser.handle);

router.get("/hello", (req, res) => {
  return res.json({ message: "Hello World!" });
});

export { router };
