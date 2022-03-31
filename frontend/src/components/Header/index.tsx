import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/logo.svg";
import searchIcon from "../../assets/search.svg";
import invitationsIcon from "../../assets/invitations.svg";
import bellIcon from "../../assets/bell.svg";

import { ActiveLink } from "../ActiveLink";
import { DropDownMenu } from "../DropDownMenu";
import { ButtonIcon, Container, MoreActions, Wrapper } from "./styles";

export function Header() {
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
            <ButtonIcon aria-label="Clique no botão para fazer uma pesquisa">
              <Image src={searchIcon} alt="ícone de uma lupa" />
            </ButtonIcon>
          </div>

          <div id="invitations">
            <ButtonIcon aria-label="Clique no botão para ver seus convites pendentes">
              <Image
                src={invitationsIcon}
                alt="ícone que representa um boneco"
              />
            </ButtonIcon>
          </div>

          <div id="bell">
            <ButtonIcon aria-label="Clique no botão para ver suas notificações">
              <Image src={bellIcon} alt="ícone que representa um sino" />
            </ButtonIcon>
          </div>

          <DropDownMenu>
            <div id="avatar">
              <div>
                <img
                  src="https://github.com/ronaldprofile.png"
                  alt="Avatar do Ronald Tomaz"
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
