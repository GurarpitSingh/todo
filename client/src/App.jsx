import { useEffect, useRef, useState } from "react";
import "./App.css";

// import Dashboard from './components/Dashboard'

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  NavLink,
} from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar logged={isLogged} />}>
        <Route index element={<Login setLogged={setIsLogged} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
