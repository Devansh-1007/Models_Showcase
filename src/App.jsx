import { Models } from "./pages/Models";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Page404 } from "./components/Page404";
import { Home } from "./pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Page404 />,
  },
  {
    path: "/models",
    element: <Models />,
    errorElement: <Page404 />,
  },
]);
function App() {
  return (
    <div className="m-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
