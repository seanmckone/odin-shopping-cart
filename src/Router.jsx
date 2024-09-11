import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import StorePage from "./components/StorePage/StorePage.jsx";
import ItemPage from "./components/ItemPage/ItemPage.jsx";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage.jsx";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <StorePage /> },
        {
          path: "item/:id",
          element: <ItemPage />,
        },
        { path: "checkout", element: <CheckoutPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default Router;
