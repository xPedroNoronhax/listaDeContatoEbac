import { useState } from "react";
import { Button, CadastroContainer, CadastroForm } from "./style";
import InputCadastro from "../../components/InputCadastro/InputCadastro";
import { useDispatch, useSelector } from "react-redux";
import { adicionarContato } from "../../store/reducers/contatos";

const CampoCadastro = () => {
  const dispatch = useDispatch();
  const contatos = useSelector((state) => state.contatos);
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      adicionarContato({
        name: formData.name,
        email: formData.email,
        tel: formData.tel,
      })
    );
    setFormData({ name: "", email: "", tel: "" });
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  console.log(contatos);

  return (
    <CadastroContainer>
      <CadastroForm onSubmit={handleSubmit}>
        <InputCadastro
          tipo="Nome"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <InputCadastro
          tipo="Email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <InputCadastro
          tipo="Telefone"
          type="tel"
          value={formData.tel}
          onChange={(e) => handleChange("tel", e.target.value)}
        />
        <Button type="submit">Cadastrar</Button>
      </CadastroForm>
    </CadastroContainer>
  );
};

export default CampoCadastro;
