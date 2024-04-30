import { createSlice } from "@reduxjs/toolkit";

let nextId = 1;
const initialContatosState = [];

const contatoSlice = createSlice({
  name: "contatos",
  initialState: initialContatosState,
  reducers: {
    adicionarContato(state, action) {
      const novoContato = {
        id: nextId++,
        name: action.payload.name,
        email: action.payload.email,
        tel: action.payload.tel,
      };
      state.push(novoContato);
    },
    editarContato(state, action) {
      const { id, name, email, tel } = action.payload;
      const contatoIndex = state.findIndex((c) => c.id === id);
      if (contatoIndex !== -1) {
        state[contatoIndex] = { id, name, email, tel };
      }
    },
    excluirContato(state, action) {
      const contatoIndex = state.findIndex((c) => c.id === action.payload);
      if (contatoIndex !== -1) {
        state.splice(contatoIndex, 1);
      }
    },
  },
});

export const { adicionarContato, editarContato, excluirContato } =
  contatoSlice.actions;

export default contatoSlice.reducer;
