import styled from "styled-components";

export const Aside = styled.aside`
  width: 24%;
  height: 100vh;
  padding: 1rem;
  background-color: #f0f0f0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  display: flex;
  flex-direction: column;
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 50px;
`;

export const Searcher = styled.input`
  margin-top: 10px;
  padding: 8px;
  border-radius: 8px;
  font-size: 1em;
`;
