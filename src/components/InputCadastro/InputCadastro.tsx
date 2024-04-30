import { Container, InputText, Label } from "./style";

const InputCadastro = ({ tipo, type, info, value, onChange, readOnly }) => {
  return (
    <Container>
      <Label>{tipo}</Label>
      <InputText
        type={type}
        placeholder={info}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
    </Container>
  );
};

export default InputCadastro;
