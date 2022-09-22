import { ReactNode } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  Modal as ModalComponent,
  ModalContent,
  ModalTrigger,
  ModalWrapper,
  ModalFooterActions,
  ModalTitle
} from "../Modal";

import { CaretDownIcon } from "@radix-ui/react-icons";
import * as M from "./styles";

interface ModalMyProfileProps {
  children: ReactNode;
}

interface ModalMyProfileDataInputs {
  id: string;
  name: string;
  occupation: string;
  status: "employed" | "unemployed" | "freelancer";
  company: string;
  city: string;
  state: string;
  country: string;
}

export function ModalMyProfile({ children }: ModalMyProfileProps) {

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm();

  // const handleSubmitForm: SubmitHandler<
  //   ModalMyProfileDataInputs
  // > = async values => {
  //   const userData = values;

  //   try {
  //     await handleUpdateProfileUser(userData);
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   reset();
  // };

  return (
    <ModalComponent>
      <ModalTrigger asChild>{children}</ModalTrigger>

      <ModalWrapper>
        <ModalContent>
          <ModalTitle>Meu perfil</ModalTitle>

          <M.Form onSubmit={() => {}}>
            <div>
              <section>
                <div>
                  <label htmlFor="name">Nome completo</label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: true })}
                  />

                  {errors.name && (
                    <div className="error">
                      <span>Nome completo é obrigatório</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="occupation">Ocupação</label>
                  <input
                    type="text"
                    id="occupation"
                    {...register("occupation")}
                  />
                </div>
              </section>

              <section id="status-company">
                <div>
                  <label htmlFor="status">Situação atual</label>

                  <div>
                    <select name="status" id="status" {...register("status")}>
                      <option value="employed">Estou empregado</option>
                      <option value="freelancer">Sou Freelancer</option>
                      <option value="unemployed">Não estou empregado</option>
                    </select>

                    <CaretDownIcon />
                  </div>
                </div>

                <div>
                  <label htmlFor="company">Empresa</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    {...register("company")}
                  />
                </div>
              </section>

              <section>
                <div>
                  <label htmlFor="city">Cidade</label>
                  <input type="text" id="city" {...register("city")} />
                </div>

                <section>
                  <div>
                    <label htmlFor="state">Estado</label>
                    <input type="text" id="state" {...register("state")} />
                  </div>

                  <div>
                    <label htmlFor="country">País</label>
                    <input type="text" id="country" {...register("country")} />
                  </div>
                </section>
              </section>

              <div id="message">
                <span>Selecione suas tecnologias em destaque</span>

                <div>
                  <p>Você ainda não cadastrou nenhuma tecnologia</p>
                </div>

                <ul></ul>
              </div>

              <ModalFooterActions />
            </div>
          </M.Form>
        </ModalContent>
      </ModalWrapper>
    </ModalComponent>
  );
}
