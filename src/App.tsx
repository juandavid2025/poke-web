import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import CatchPage from "./pages/CatchPage";
import PokemonDetailPage from "./pages/PokemonDetailPage";
import PokedexPage from "./pages/PokedexPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <CatchPage /> },
      { path: "/pokemon/:id", element: <PokemonDetailPage /> },
      { path: "/pokedex", element: <PokedexPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
