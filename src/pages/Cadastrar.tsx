import { MainContainer } from "../styles";
import BarraLateral from "../containers/BarraLateral/BarraLateral";
import EditarContato from "../containers/EditarContato/EditarContato";

const Cadastrar = () => {
  return (
    <MainContainer>
      <BarraLateral />
      <EditarContato />
    </MainContainer>
  );
};

export default Cadastrar;
