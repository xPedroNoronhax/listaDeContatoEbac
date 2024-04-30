import { Container } from "./style";
import { TituloComponent } from "../../components/Titulo/styles";

import InfoContato from "../InfoContato/InfoContato";
import { useSelector } from "react-redux";

const EditarContato = () => {
  const contato = useSelector((state) => state.contatos);
  return (
    <Container>
      <TituloComponent>Informações</TituloComponent>
      <InfoContato contato={contato} />
    </Container>
  );
};

export default EditarContato;
