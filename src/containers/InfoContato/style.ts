import styled from "styled-components";

export const CadastroContainer = styled.div`
  height: 400px;
  width: 72%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

export const CadastroDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Button = styled.div`
  width: 30%;
  color: white;
  background-color: blue;
  border-radius: 8px;
  text-align: center;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 200, 0.9);
  }
`;

export const ButtonExcluir = styled(Button)`
  background-color: red;
  &:hover {
    background-color: rgba(200, 0, 0, 0.9);
  }
`;

export const ButtonVoltar = styled(Button)`
  background-color: green;
  width: 100%;
  margin: 40px;
  &:hover {
    background-color: rgba(0, 200, 0, 0.9);
  }
`;
