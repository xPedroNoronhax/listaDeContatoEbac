import { useState } from "react";
import {
  Button,
  ButtonExcluir,
  ButtonVoltar,
  CadastroContainer,
  CadastroDiv,
} from "./style";
import InputCadastro from "../../components/InputCadastro/InputCadastro";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editarContato } from "../../store/reducers/contatos";
import { excluirContato } from "../../store/reducers/contatos";

const InfoContato = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const contato = useSelector((state) =>
    state.contatos.find((c) => c.id === parseInt(id))
  );

  const nav = useNavigate();

  const handleDelete = (id) => {
    dispatch(excluirContato(id));
    nav("/");
  };

  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({});

  const handleEditClick = () => {
    setEditMode(true);
    setEditedData(contato);
  };

  const handleSaveClick = () => {
    dispatch(editarContato({ id: contato.id, ...editedData }));
    setEditMode(false);
  };

  const handleChange = (field, value) => {
    setEditedData({
      ...editedData,
      [field]: value,
    });
  };

  if (!contato) {
    return <div>Contato não encontrado.</div>;
  }

  return (
    <CadastroContainer>
      <CadastroDiv>
        <InputCadastro
          tipo="Nome"
          type="text"
          info={editMode ? editedData.name : contato.name}
          readOnly={!editMode}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <InputCadastro
          tipo="Email"
          type="email"
          info={editMode ? editedData.email : contato.email}
          readOnly={!editMode}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <InputCadastro
          tipo="Telefone"
          type="tel"
          info={editMode ? editedData.tel : contato.tel}
          readOnly={!editMode}
          onChange={(e) => handleChange("tel", e.target.value)}
        />
      </CadastroDiv>
      <div style={{ display: "flex", gap: "40px", justifyContent: "center" }}>
        {editMode ? (
          <Button onClick={handleSaveClick}>Salvar</Button>
        ) : (
          <Button onClick={handleEditClick}>Editar</Button>
        )}
        <ButtonExcluir onClick={() => handleDelete(contato.id)}>
          Excluir
        </ButtonExcluir>
      </div>
      <Link to="/">
        <ButtonVoltar>Cadastrar Novo Contato</ButtonVoltar>
      </Link>
    </CadastroContainer>
  );
};

export default InfoContato;
