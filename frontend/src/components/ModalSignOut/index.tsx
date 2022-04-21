import { ReactNode } from "react";
import Image from "next/image";
import {
  Modal as ModalComponent,
  ModalContent,
  ModalTrigger,
  ModalWrapper,
  ModalTitle,
  ModalButtonClose
} from "../Modal";

import { useAuth } from "../../context/Auth";

import logoutPlatform from "../../assets/logout-platform.svg";
import noLogoutPlatform from "../../assets/no-logout-platform.svg";

import * as M from "./styles";

interface ModalSignOutProps {
  children: ReactNode;
}

export function ModalSignOut({ children }: ModalSignOutProps) {
  const { signOut } = useAuth();

  return (
    <ModalComponent>
      <ModalTrigger asChild>{children}</ModalTrigger>

      <ModalWrapper width={480} height={340}>
        <ModalContent>
          <M.Content>
            <ModalTitle>Quer mesmo sair?</ModalTitle>

            <M.ButtonActionModal>
              <ModalButtonClose asChild>
                <button>
                  <Image
                    src={noLogoutPlatform}
                    alt="imagem representando uma porta aberta com o sinal de X"
                  />

                  <span>Noooo!</span>
                </button>
              </ModalButtonClose>

              <button onClick={signOut}>
                <Image
                  src={logoutPlatform}
                  alt="imagem representando uma porta aberta"
                />

                <span>Sair</span>
              </button>
            </M.ButtonActionModal>
          </M.Content>
        </ModalContent>
      </ModalWrapper>
    </ModalComponent>
  );
}
