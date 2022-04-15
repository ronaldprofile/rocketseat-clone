import { useAuth } from "../../context/Auth";
import { EditIcon } from "../../assets/EditIcon";
import { LocalizationIcon } from "../../assets/Localization";
import { ModalMyProfile } from "../ModalMyProfile";
import * as C from "./styles";

export function CardUser() {
  const { user } = useAuth();

  const userIsWorking = user?.company && user?.status === "employed";
  const userHasAddress = user?.city || user?.state || user?.country;

  return (
    <C.Container>
      <ModalMyProfile>
        <C.ButtonEdit>
          <EditIcon />
        </C.ButtonEdit>
      </ModalMyProfile>

      <C.Label userIsWorking={userIsWorking}>
        <div className="hover-text">
          <span>Trocar Imagem</span>
        </div>

        <button>
          <img
            src={`https://ui-avatars.com/api/?size=128&background=5b4699&color=fff&name=${user?.name}`}
            alt={"Foto do " + user?.name}
          />
        </button>

        {userIsWorking && (
          <div className="company">
            <strong>{user?.company}</strong>
          </div>
        )}
      </C.Label>

      <C.Title as="h1">{user?.name}</C.Title>

      <C.Section>
        {user?.occupation && (
          <div className="occupation">
            <span>{user?.occupation}</span>
          </div>
        )}

        {userHasAddress && (
          <div className="address">
            <span>
              <LocalizationIcon />
              {user?.city} {user?.state} {user?.country}
            </span>
          </div>
        )}
      </C.Section>

      <div className="member">
        <span>Membro desde: Março, 2022</span>
      </div>
    </C.Container>
  );
}
