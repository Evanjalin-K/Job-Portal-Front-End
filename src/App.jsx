import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { HomeComponent } from "./components/HomeComponent";
import Register from "./components/Register";
import Login from "./components/Login";


const router = createBrowserRouter([
  {
  path:"/",
  element: <Home />,
  children: [
    {
    path: "/",
    element: <HomeComponent />
    },
    {
      path: "/register",
      element: <Register/>
    },
    {
      path:"/login",
      element: <Login />
    }
  ]
 }
]);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App;