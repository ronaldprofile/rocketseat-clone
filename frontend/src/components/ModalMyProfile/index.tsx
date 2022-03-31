import { ReactNode } from "react";
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

export function ModalMyProfile({ children }: ModalMyProfileProps) {
  return (
    <ModalComponent>
      <ModalTrigger asChild>{children}</ModalTrigger>

      <ModalWrapper>
        <ModalContent>
          <ModalTitle>Meu perfil</ModalTitle>

          <M.Form>
            <div>
              <section>
                <div>
                  <label htmlFor="full_name">Nome completo</label>
                  <input type="text" id="full_name" value="Ronald Tomaz" />
                </div>

                <div>
                  <label htmlFor="occupation">Ocupação</label>
                  <input type="text" id="occupation" />
                </div>
              </section>

              <section id="status-company">
                <div>
                  <label htmlFor="status">Situação atual</label>

                  <div>
                    <select name="status" id="status">
                      <option value="employed">Estou empregado</option>
                      <option value="freelancer">Sou Freelancer</option>
                      <option value="unemployed">Não estou empregado</option>
                    </select>

                    <CaretDownIcon />
                  </div>
                </div>

                <div>
                  <label htmlFor="company">Empresa</label>
                  <input type="text" id="company" name="company" />
                </div>
              </section>

              <section>
                <div>
                  <label htmlFor="city">Cidade</label>
                  <input type="text" id="city" />
                </div>

                <section>
                  <div>
                    <label htmlFor="state">Estado</label>
                    <input type="text" id="state" />
                  </div>

                  <div>
                    <label htmlFor="country">País</label>
                    <input type="text" id="country" />
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
