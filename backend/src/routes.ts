import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetUserController } from "./controllers/GetUserController";
import { UpdatedUserController } from "./controllers/UpdatedUserControlled";

const router = Router();

router.post("/signup", new CreateUserController().handle);
router.get("/user/:id", new GetUserController().handle);
router.put("/user/:id", new UpdatedUserController().handle);
export { router };
