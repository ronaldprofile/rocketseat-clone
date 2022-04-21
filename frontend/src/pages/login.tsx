import Image from "next/image";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

import logo from "../assets/logo.svg";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useAuth } from "../context/Auth";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { EmailIcon } from "../assets/Email";
import { LockIcon } from "../assets/Lock";
import { EyesIcon } from "../assets/Eyes";

import * as L from "../styles/pages/Login";

interface LoginUserFormData {
  email: string;
  password: string;
}

const createUserLoginForm = yup.object().shape({
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required("Este campo é obrigatório"),
  password: yup.string().required("Este campo é obrigatório")
});

export default function Login() {
  const { signInWithEmailAndPassword } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(createUserLoginForm)
  });

  const handleSubmitForm: SubmitHandler<LoginUserFormData> = async data => {
    const { email, password } = data;

    await signInWithEmailAndPassword(email, password);

    reset();
  };

  return (
    <L.Container>
      <L.Wrapper>
        <L.Content>
          <div id="logo">
            <Image src={logo} alt="Logo da empresa Rocketseat" />
          </div>
          <h1>Faça seu login na plataforma</h1>
        </L.Content>

        <L.Form onSubmit={handleSubmit(handleSubmitForm)}>
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
                    {...register("email")}
                  />
                </div>

                {errors.email && (
                  <span className="error">{errors.email.message}</span>
                )}
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
                    {...register("password")}
                  />

                  <EyesIcon />
                </div>

                {errors.password && (
                  <span className="error">{errors.password.message}</span>
                )}
              </div>
            </div>
          </section>

          <a href="#" className="forgot">
            Esqueci minha senha
          </a>

          <Button type="submit" variant="primary">
            {isSubmitting ? "Carregando..." : "entrar"}
          </Button>

          <div className="register">
            <span>Não tem uma conta?&nbsp;</span>
            <a href="/">Registre-se</a>
          </div>

          <div className="divider"></div>

          <div className="login-github">
            <span>Ou entre com</span>

            <Button as="a" href="#">
              <GitHubLogoIcon /> Github
            </Button>
          </div>
        </L.Form>
      </L.Wrapper>
    </L.Container>
  );
}
