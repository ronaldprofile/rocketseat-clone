import Image from "next/image";
import Head from "next/head";
import { useAuth } from "../context/Auth";

import { Button } from "../components/Button";
import { Header } from "../components/Header";

import fireIcon from "../assets/fire.svg";
import nlwTogether from "../assets/nlw-together.svg";
import nlwHeat from "../assets/nlw-heat.svg";

import * as D from "../styles/pages/Dashboard";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>Rocketseat | Dashboard</title>
        <meta name="description" content="Página Dashboard" />
        <meta name="theme-color" content="#8257e5" />
      </Head>

      <Header />

      <D.Container>
        <D.Main>
          <D.Wrapper>
            <div>
              <div className="welcome">
                <h2>Olá, {user?.name}</h2>
                <p>Sua jornada rumo ao próximo nível está apenas começando!</p>
              </div>

              <span>#NeverStopLearning</span>
            </div>

            <div className="grid">
              <div className="first-card">
                <header>
                  <span>
                    <img
                      src={`https://ui-avatars.com/api/?size=128&background=5b4699&color=fff&name=${user?.name}`}
                      alt={"Foto do " + user?.name}
                    />
                  </span>

                  <div>
                    <div>
                      <h3>Meu perfil</h3>
                      <span>0 visualizações nos últimos 7 dias</span>
                    </div>

                    <Button as="a" href="/profile">
                      Visualizar perfil
                    </Button>
                  </div>
                </header>

                <footer>
                  <span>
                    Nível do perfil:
                    <strong> Básico</strong>
                  </span>

                  <div className="progress-bar-container">
                    <div className="bar-empty">
                      <div className="bar-progress"></div>

                      <div className="fire">
                        <Image src={fireIcon} alt="" />
                      </div>
                    </div>
                  </div>
                </footer>
              </div>

              <section>
                <D.CardEvent>
                  <div className="content">
                    <header>
                      <Image
                        src={nlwTogether}
                        alt="logo do evento nlw together"
                      />
                    </header>

                    <footer>
                      <p>Disponível conteúdo prático da 6ª edição do NLW.</p>
                      <Button>Acessar conteúdo</Button>
                    </footer>
                  </div>
                </D.CardEvent>

                <D.CardEvent>
                  <div className="content">
                    <header>
                      <Image src={nlwHeat} alt="logo do evento nlw heat" />
                    </header>

                    <footer>
                      <p>Disponível conteúdo prático da 6ª edição do NLW.</p>
                      <Button>Acessar conteúdo</Button>
                    </footer>
                  </div>
                </D.CardEvent>
              </section>
            </div>
          </D.Wrapper>
        </D.Main>
      </D.Container>
    </>
  );
}
