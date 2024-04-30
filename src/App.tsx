import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import EstiloGlobal from "./styles";
import Home from "./pages/Home";
import Cadastrar from "./pages/Cadastrar";
import { Provider } from "react-redux";
import store from "./store";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/info/:id",
    element: <Cadastrar />,
  },
]);
function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />

      <RouterProvider router={rotas} />
    </Provider>
  );
}

export default App;
