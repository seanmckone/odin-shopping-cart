import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import StorePage from "./components/StorePage/StorePage.jsx";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [{ index: true, element: <StorePage /> }],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default Router;
