import { EditIcon } from "../../assets/EditIcon";
import { ModalMyProfile } from "../ModalMyProfile";
import * as C from "./styles";

export function CardUser() {
  return (
    <C.Container>
      <ModalMyProfile>
        <C.ButtonEdit>
          <EditIcon />
        </C.ButtonEdit>
      </ModalMyProfile>

      <C.Label>
        <div className="hover-text">
          <span>Trocar Imagem</span>
        </div>

        <button>
          <img src="https://github.com/ronaldprofile.png" alt="Ronald Tomaz" />
        </button>
      </C.Label>

      <C.Title as="h1">Ronald Tomaz</C.Title>
      <C.Section></C.Section>

      <div className="member">
        <span>Membro desde: Março, 2022</span>
      </div>
    </C.Container>
  );
}
