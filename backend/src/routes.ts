import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetUserController } from "./controllers/GetUserController";
import { LoginUserController } from "./controllers/LoginUserController";
import { UpdatedUserController } from "./controllers/UpdatedUserControlled";

const router = Router();

router.get("/github", (request, response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

router.get("/github/callback", (request, response) => {
  const { code } = request.query;

  return response.json(code);
});

router.post("/signup", new CreateUserController().handle);
router.get("/user/:id", new GetUserController().handle);
router.put("/user/:id", new UpdatedUserController().handle);
router.post("/authenticate", new AuthenticateUserController().handle);
router.post("/authenticate/login", new LoginUserController().handle);

export { router };
