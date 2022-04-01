import { EditIcon } from "../../assets/EditIcon";
import { useUser } from "../../context/UserContext";
import { ModalMyProfile } from "../ModalMyProfile";
import * as C from "./styles";

export function CardUser() {
  const { user } = useUser();

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
          <img
            src={`https://ui-avatars.com/api/?size=128&background=5b4699&color=fff&name=${user?.name}`}
            alt={"Foto do " + user?.name}
          />
        </button>
      </C.Label>

      <C.Title as="h1">{user?.name}</C.Title>
      <C.Section></C.Section>

      <div className="member">
        <span>Membro desde: Março, 2022</span>
      </div>
    </C.Container>
  );
}
