import { Router } from "express";
import { CreateAccountController } from "./controllers/CreateAccountController";
import { GetAccountByIdController } from "./controllers/GetAccountByIdController";
import { LoginWithEmailAndPassworController } from "./controllers/LoginWithEmailAndPasswordController";

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

router.post("/signup", new CreateAccountController().handle);
router.get("/account/:id", new GetAccountByIdController().handle);

router.post("/auth/login", new LoginWithEmailAndPassworController().handle);

export { router };
