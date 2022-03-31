import { ReactNode } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  Modal as ModalComponent,
  ModalContent,
  ModalWrapper,
  ModalTrigger,
  ModalFooterActions,
  ModalTitle
} from "../Modal";

import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  FontBoldIcon,
  FontItalicIcon,
  EyeOpenIcon,
  CodeIcon
} from "@radix-ui/react-icons";

import { useUser } from "../../context/UserContext";
import * as M from "./styles";

interface ModalAboutMeProps {
  children: ReactNode;
}

interface ModalDataInputs {
  about_me: string;
  linkedin_url: string;
  github_url: string;
}

export function ModalAboutMe({ children }: ModalAboutMeProps) {
  const { handleUpdateAboutUser } = useUser();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm();

  const handleSubmitForm: SubmitHandler<ModalDataInputs> = async values => {
    const userInformation = { ...values };

    await handleUpdateAboutUser(userInformation);

    reset();
  };

  return (
    <ModalComponent>
      <ModalTrigger asChild>{children}</ModalTrigger>

      <ModalWrapper>
        <ModalContent>
          <ModalTitle>Sobre mim</ModalTitle>

          <M.Form onSubmit={handleSubmit(handleSubmitForm)}>
            <section>
              <div>
                <M.OptionsButtons>
                  <button type="button">
                    <FontBoldIcon />
                  </button>
                  <button type="button">
                    <FontItalicIcon />
                  </button>
                  <button type="button">
                    <CodeIcon />
                  </button>
                  <button type="button">
                    <EyeOpenIcon />
                  </button>
                </M.OptionsButtons>

                <M.AreaText>
                  <textarea {...register("about_me", { required: true })} />

                  {errors.about_me && <span>Sobre mim é obrigatório</span>}
                </M.AreaText>
              </div>

              <div id="linkedin">
                <div>
                  <div className="brand">
                    <LinkedInLogoIcon />
                    <span>Linkedin</span>
                  </div>

                  <div className="field">
                    <label htmlFor="linkedin" className="sr-only">
                      Insira a URL do seu perfil do linkedin
                    </label>

                    <input
                      type="url"
                      id="linkedin"
                      aria-label="linkedin"
                      placeholder="Insira a URL"
                      {...register("linkedin_url")}
                    />
                  </div>
                </div>
              </div>

              <div id="github">
                <div>
                  <div className="brand">
                    <GitHubLogoIcon />
                    <span>Github</span>
                  </div>
                  <div className="field">
                    <label htmlFor="github" className="sr-only">
                      Insira a URL do seu perfil do github
                    </label>

                    <input
                      type="url"
                      id="github"
                      aria-label="github"
                      placeholder="Insira a URL"
                      {...register("github_url")}
                    />
                  </div>
                </div>
              </div>
            </section>

            <ModalFooterActions />
          </M.Form>
        </ModalContent>
      </ModalWrapper>
    </ModalComponent>
  );
}
