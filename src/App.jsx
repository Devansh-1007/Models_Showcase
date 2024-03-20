import { Models } from "./components/Models";
import { Hero } from "./components/Hero";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Page404 } from "./components/Page404";
import { Home } from "./components/Home";
function App() {
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

  return (
    <div className="m-auto">
      <RouterProvider router={router}>
        <Hero />
        <Models />
      </RouterProvider>
    </div>
  );
}

export default App;
