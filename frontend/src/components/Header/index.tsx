import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/logo.svg";
import { SearchIcon } from "../../assets/SearchIcon";
import { BellIcon } from "../../assets/BellIcon";
import { LeavePlatformIcon } from "../../assets/LeavePlatformIcon";
import { InvitationsIcon } from "../../assets/InvitationsIcon";

import { useAuth } from "../../context/Auth";
import { ActiveLink } from "../ActiveLink";
import { ModalSignOut } from "../ModalSignOut";
import { DropDownMenu } from "../DropDownMenu";
import { ButtonIcon, Container, MoreActions, Wrapper } from "./styles";

export function Header() {
  const { user } = useAuth();

  return (
    <Container>
      <Wrapper>
        <div id="logo">
          <Link href="/dashboard">
            <a>
              <Image src={logo} alt="Logo da empresa Rocketseat" />
            </a>
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <ActiveLink href="/dashboard" content="Home" />
            </li>
            <li>
              <ActiveLink href="/discover" content="Discover" />
            </li>
          </ul>
        </nav>

        <MoreActions>
          <div id="search">
            <ButtonIcon
              aria-label="Clique no botão para fazer uma pesquisa"
              title="fazer uma pesquisa"
            >
              <SearchIcon />
            </ButtonIcon>
          </div>

          <div id="invitations">
            <ButtonIcon
              aria-label="Clique no botão para ver seus convites pendentes"
              title="ver convites pendentes"
            >
              <InvitationsIcon />
            </ButtonIcon>
          </div>

          <div id="bell">
            <ButtonIcon
              aria-label="Clique no botão para ver suas notificações"
              title="ver notificações"
            >
              <BellIcon />
            </ButtonIcon>
          </div>

          <div id="leave-platform">
            <ModalSignOut>
              <ButtonIcon
                aria-label="Clique no botão para abrir um modal com a opção de deixar a plataforma"
                title="deixar a plataforma"
              >
                <LeavePlatformIcon fill="#a8a8b3" />
              </ButtonIcon>
            </ModalSignOut>
          </div>

          <DropDownMenu>
            <div id="avatar">
              <div>
                <img
                  src={`https://ui-avatars.com/api/?size=128&background=5b4699&color=fff&name=${user?.name}`}
                  alt={`Avatar do ${user?.name}`}
                  width={52}
                  height={52}
                />
              </div>
            </div>
          </DropDownMenu>
        </MoreActions>
      </Wrapper>
    </Container>
  );
}
