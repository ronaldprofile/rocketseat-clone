import Image from "next/image";
import { Header } from "../components/Header";
import { CardUser } from "../components/CardUser";
import { ModalAboutMe } from "../components/ModalAboutMe";
import { EditIcon } from "../assets/EditIcon";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

import plusIcon from "../assets/plus.svg";
import * as P from "../styles/pages/Profile";

export default function Profile() {
  return (
    <>
      <Header />

      <P.Wrapper>
        <P.Banner>
          <p>Dimensão sugerida: 1980x160</p>

          <div>
            <P.ButtonEdit>
              <EditIcon />
            </P.ButtonEdit>
          </div>
        </P.Banner>

        <P.Container>
          <P.Aside>
            <CardUser />

            <div id="network">
              <header>
                <a href="/network">
                  <P.Title as="h2">Minha rede</P.Title>
                </a>
              </header>

              <small>Você não possui nenhuma conexão</small>
            </div>

            <div id="interests">
              <header>
                <a href="/interests">
                  <P.Title as="h2">Interesses</P.Title>
                </a>
              </header>
              <small>Você ainda não seguiu nenhuma empresa</small>
            </div>

            <div id="insignia">
              <header>
                <P.Title as="h2">Insígnias</P.Title>
              </header>

              <div className="list">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </P.Aside>

          <P.Main>
            <section id="about">
              <ModalAboutMe>
                <P.ButtonEdit>
                  <EditIcon />
                </P.ButtonEdit>
              </ModalAboutMe>

              <P.Title as="h2">Sobre mim</P.Title>

              {/* {user?.about_me ? (
                <P.AboutMePreview>
                  <p>{user.about_me}</p>

                  {user?.github_url ||
                    (user?.linkedin_url && (
                      <footer>
                        {user?.github_url && (
                          <a
                            href={user.github_url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <GitHubLogoIcon />
                            <span>Github</span>
                          </a>
                        )}

                        {user?.linkedin_url && (
                          <a
                            href={user.linkedin_url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <LinkedInLogoIcon />
                            <span>Linkedin</span>
                          </a>
                        )}
                      </footer>
                    ))}
                </P.AboutMePreview>
              ) : ( */}
              <ModalAboutMe>
                <div className="area-about-me">
                  <Image
                    src={plusIcon}
                    alt="ícone que representa o sinal de mais (+)"
                  />
                  <span>Quem é você e o que faz?</span>
                </div>
              </ModalAboutMe>
              {/* )} */}
            </section>

            <section id="techs">
              <P.ButtonEdit>
                <EditIcon />
              </P.ButtonEdit>

              <P.Title as="h2">Tecnologias</P.Title>

              <div className="grid">
                <div className="experience">
                  <span>Tenho experiência</span>

                  <div className="add-tech">
                    <Image
                      src={plusIcon}
                      alt="ícone que representa o sinal de mais (+)"
                    />
                  </div>
                </div>

                <div className="studying">
                  <span>Estou estudando</span>

                  <div className="add-tech">
                    <Image
                      src={plusIcon}
                      alt="ícone que representa o sinal de mais (+)"
                    />
                  </div>
                </div>

                <div className="interested">
                  <span>Tenho interesse</span>

                  <div className="add-tech">
                    <Image
                      src={plusIcon}
                      alt="ícone que representa o sinal de mais (+)"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section id="more-infos">
              <div className="answers-forum">
                <p>Respostas no Fórum</p>
                <span>0</span>
              </div>

              <div className="topics-created">
                <p>Tópicos criados</p>
                <span>0</span>
              </div>

              <div className="relevant-answers">
                <p>Respostas relevantes</p>
                <span>0</span>
              </div>

              <div className="reputation">
                <p>Reputação</p>
                <span>0</span>
              </div>

              <div className="attended-classes">
                <p>Aulas assistidas</p>
                <span>0</span>
              </div>

              <div className="challenges-completed">
                <p>Desafios concluídos</p>
                <span>0</span>
              </div>
            </section>

            <section id="activity">
              <P.Title as="h2">Atividades</P.Title>
              <p>Nenhuma atividade encontrada</p>
            </section>
          </P.Main>
        </P.Container>
      </P.Wrapper>
    </>
  );
}
