import { ContatoComponent } from "./style";

const Contato = ({ children, key }) => {
  return <ContatoComponent key={key}>{children}</ContatoComponent>;
};

export default Contato;
