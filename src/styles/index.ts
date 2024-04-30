import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
*{
    margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;

  a{
    text-decoration: none;
    color: black;
    cursor: pointer;
  }

}`;

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
`;

export default EstiloGlobal;
