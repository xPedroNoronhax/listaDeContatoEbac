import { TituloComponent } from "../../components/Titulo/styles";
import CampoCadastro from "../CampoCadastro/CampoCadastro";
import { Container } from "./styles";

const NovoContato = () => {
  return (
    <Container>
      <TituloComponent>Novo contato</TituloComponent>
      <CampoCadastro />
    </Container>
  );
};

export default NovoContato;
