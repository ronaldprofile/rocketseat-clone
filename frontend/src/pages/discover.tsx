import Image from "next/image";
import { Button } from "../components/Button";
import bird from "../assets/bird.svg";
import { Container, Wrapper } from "../styles/pages/Discover";
import { Header } from "../components/Header";

export default function Discover() {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <div>
            <Image src={bird} alt="Figura do rosto de um pássaro" />

            <span>Não encontramos nada por aqui...</span>
            <Button as="a" href="/dashboard">
              Clique para voltar
            </Button>
          </div>
        </Wrapper>
      </Container>
    </>
  );
}
