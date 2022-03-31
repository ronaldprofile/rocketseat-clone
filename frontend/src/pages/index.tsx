import Head from "next/head";
import Image from "next/image";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUser } from "../context/UserContext";

import logo from "../assets/logo.svg";
import { EmailIcon } from "../assets/Email";
import { EyesIcon } from "../assets/Eyes";
import { LockIcon } from "../assets/Lock";
import { UserFormIcon } from "../assets/UserForm";

import { Button } from "../components/Button";
import * as H from "../styles/pages/Home";

interface CreateUserFormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome é obrigatório")
    .min(5, "Digite seu nome completo"),
  email: yup
    .string()
    .required("Email é obrigatório")
    .email("Insira um e-mail válido"),
  password: yup
    .string()
    .required("Senha é obrigatório")
    .min(4, "Senha deve ter no mínimo 4 caracteres"),

  password_confirmation: yup
    .string()
    .required("Confirmação de senha é obrigatório")
    .oneOf([null, yup.ref("password")], "Senhas não conferem")
});

export default function Home() {
  const { signup } = useUser();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm({
    resolver: yupResolver(createUserFormSchema)
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async values => {
    const user = values;

    await signup(user);
  };

  return (
    <>
      <Head>
        <title>Cadastro | Rocketseat</title>
        <meta name="description" content="Rocketseat Clone page user" />
      </Head>

      <H.Container>
        <H.Wrapper>
          <H.Form onSubmit={handleSubmit(handleCreateUser)}>
            <h1>Crie sua conta</h1>

            <section>
              <div className="input-group">
                <div className="field">
                  <div>
                    <EmailIcon />

                    <label htmlFor="email" className="sr-only">
                      Seu E-mail
                    </label>

                    <H.Input
                      type="email"
                      name="email"
                      aria-label="email"
                      placeholder="Seu E-mail"
                      id="email"
                      {...register("email")}
                    />
                  </div>

                  {errors.email && <span>{errors.email.message}</span>}
                </div>
              </div>

              <div className="input-group">
                <div className="field">
                  <div>
                    <UserFormIcon />

                    <label htmlFor="name" className="sr-only">
                      Seu nome
                    </label>
                    <H.Input
                      type="text"
                      name="name"
                      aria-label="name"
                      placeholder="Seu nome"
                      id="name"
                      {...register("name")}
                    />
                  </div>

                  {errors.name && <span>{errors.name.message}</span>}
                </div>
              </div>

              <div className="input-group">
                <div className="field">
                  <div>
                    <LockIcon />

                    <label htmlFor="password" className="sr-only">
                      Sua senha
                    </label>
                    <H.Input
                      type="password"
                      name="password"
                      aria-label="password"
                      placeholder="Sua senha"
                      id="password"
                      {...register("password")}
                    />

                    <a href="#">
                      <EyesIcon />
                    </a>
                  </div>

                  {errors.password && <span>{errors.password.message}</span>}
                </div>
              </div>

              <div className="input-group">
                <div className="field">
                  <div>
                    <LockIcon />

                    <label htmlFor="password_confirmation" className="sr-only">
                      Confirme sua senha
                    </label>
                    <H.Input
                      type="password"
                      name="password_confirmation"
                      aria-label="password_confirmation"
                      placeholder="Confirme sua senha"
                      id="password-confirmation"
                      {...register("password_confirmation")}
                    />

                    <a href="#">
                      <EyesIcon />
                    </a>
                  </div>

                  {errors.password_confirmation && (
                    <span>{errors.password_confirmation.message}</span>
                  )}
                </div>
              </div>
            </section>

            <div className="text">
              <span>
                Ao se registrar, você aceita nossos&nbsp;
                <a href="#">termos de uso</a>
                &nbsp;e a nossa&nbsp;
                <a href="#">política de privacidade.</a>
              </span>
            </div>

            <Button type="submit">
              {isSubmitting ? "Cadastrando..." : "Cadastrar"}
            </Button>
          </H.Form>

          <H.Content>
            <div id="logo">
              <Image src={logo} alt="logo da empresa Rocketseat." />
            </div>
            <h1>Mais de 200 mil boosters já estão conectados.</h1>
            <p>
              Junte-se a milhares de devs e acelere na direção dos seus
              objetivos
            </p>
          </H.Content>
        </H.Wrapper>
      </H.Container>
    </>
  );
}
