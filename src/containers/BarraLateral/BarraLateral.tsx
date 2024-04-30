import { useSelector } from "react-redux";
import Contato from "../../components/Contato/Contato";

import { TituloComponent } from "../../components/Titulo/styles";
import { Aside, ContactList, Searcher } from "./styles";
import { Link } from "react-router-dom";

const BarraLateral = () => {
  const contatos = useSelector((state) => state.contatos);
  return (
    <Aside>
      <TituloComponent>Contatos</TituloComponent>

      <ContactList>
        {contatos.map((contato) => (
          <Link to={`/info/${contato.id}`}>
            <Contato key={contato.id}>{contato.name}</Contato>
          </Link>
        ))}
      </ContactList>
    </Aside>
  );
};

export default BarraLateral;
