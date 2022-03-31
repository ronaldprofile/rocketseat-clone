import { ReactNode } from "react";
import { Button } from "../Button";
import Link from "next/link";

import userIcon from "../../assets/user.svg";
import changelogIcon from "../../assets/changelog.svg";
import annotationsIcon from "../../assets/annotations.svg";
import myDatasIcon from "../../assets/my-datas.svg";
import codeNLWIcon from "../../assets/code-nlw.svg";
import helpIcon from "../../assets/help.svg";
import historyIcon from "../../assets/history.svg";
import leavePlatformIcon from "../../assets/leave-platform.svg";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as D from "./styles";
import Image from "next/image";

interface DropDownMenuProps {
  children: ReactNode;
}

export function DropDownMenu({ children }: DropDownMenuProps) {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <div>{children}</div>
      </DropdownMenuPrimitive.Trigger>

      <D.Content>
        <D.Item>
          <Link href="/profile" passHref>
            <a>
              <Image src={userIcon} alt="user icon" />
              <span>Meu perfil</span>
            </a>
          </Link>
        </D.Item>
        <D.Item>
          <Link href="/account" passHref>
            <a>
              <Image
                src={myDatasIcon}
                alt="ícone representando um banco de dados"
              />
              <span>Meus dados</span>
            </a>
          </Link>
        </D.Item>
        <D.Item>
          <Link href="/notebook" passHref>
            <a>
              <Image
                src={annotationsIcon}
                alt="ícone representando um folha de papel"
              />
              <span>Minhas anotações</span>
            </a>
          </Link>
        </D.Item>
        <D.Item>
          <Link href="/nlw" passHref>
            <a>
              <Image
                src={codeNLWIcon}
                alt="ícone representando uma tag HTML vazia"
              />
              <span>NLW</span>
            </a>
          </Link>
        </D.Item>
        <D.Item>
          <Link href="/help" passHref>
            <a>
              <Image
                src={helpIcon}
                alt="ícone representando o sinal de interrogação"
              />
              <span>Central de ajuda</span>
            </a>
          </Link>
        </D.Item>

        <D.Item>
          <Link href="/changelogs" passHref>
            <a>
              <Image
                src={changelogIcon}
                alt="ícone representando uma engrenagem de update"
              />
              <span>Changelog</span>
            </a>
          </Link>
        </D.Item>
        <D.Item>
          <Link href="/history" passHref>
            <a>
              <Image src={historyIcon} alt="ícone representando um relógio" />
              <span>Histórico</span>
            </a>
          </Link>
        </D.Item>
        <D.Item>
          <a href="#">
            <Image
              src={leavePlatformIcon}
              alt="ícone representando o X para sair da plataforma"
            />
            <span>Sair da plataforma</span>
          </a>
        </D.Item>

        <D.Item>
          <Button>Dar feedback</Button>
        </D.Item>

        <D.Arrow />
      </D.Content>
    </DropdownMenuPrimitive.Root>
  );
}
