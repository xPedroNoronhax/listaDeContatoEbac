import { configureStore } from "@reduxjs/toolkit";
import contatosReducer from "../store/reducers/contatos";

const store = configureStore({
  reducer: { contatos: contatosReducer },
});

export default store;
