import Image from "next/image";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

import logo from "../assets/logo.svg";
import { EmailIcon } from "../assets/Email";
import { LockIcon } from "../assets/Lock";
import { EyesIcon } from "../assets/Eyes";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Container, Content, Wrapper, Form } from "../styles/pages/Login";

export default function Login() {
  return (
    <Container>
      <Wrapper>
        <Content>
          <div id="logo">
            <Image src={logo} alt="Logo da empresa Rocketseat" />
          </div>
          <h1>Faça seu login na plataforma</h1>
        </Content>

        <Form>
          <section>
            <div className="input-group">
              <div className="field">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Insira seu E-mail
                  </label>

                  <EmailIcon />

                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                  />
                </div>
              </div>
            </div>

            <div className="input-group">
              <div className="field">
                <div>
                  <label htmlFor="password" className="sr-only">
                    Insira sua senha
                  </label>

                  <LockIcon />

                  <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Senha"
                  />

                  <EyesIcon />
                </div>
              </div>
            </div>
          </section>

          <a href="#" className="forgot">
            Esqueci minha senha
          </a>

          <Button type="submit" variant="disabled">
            entrar
          </Button>

          <div className="register">
            <span>Não tem uma conta?&nbsp;</span>
            <a href="#">Registre-se</a>
          </div>

          <div className="divider"></div>

          <div className="login-github">
            <span>Ou entre com</span>

            <a href="#">
              <GitHubLogoIcon /> Github
            </a>
          </div>
        </Form>
      </Wrapper>
    </Container>
  );
}
