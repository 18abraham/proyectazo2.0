import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { RecoverPassword } from "./RecoverPassword";
import { ListUsers } from "./ListUsers";
import { CreateQuestionnaire } from "./CreateQuestionnaire";
import { Header } from "./components/Header";
import { Dashboard } from "./Dashboard";
import { ShowQuestionnaires } from "./ShowQuestionnaires";
import { RegisterUser } from "./RegisterUser";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Dashboard />,
  },
  {
    path: "/list-users",
    element: <ListUsers />,
  },
  {
    path: "/list-q",
    element: <ShowQuestionnaires />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/recover-password",
    element: <RecoverPassword />,
  },
  {
    path: "/register-user",
    element: <RegisterUser />,
  },
  {
    path: "/create-questionnaires/:id",
    element: <CreateQuestionnaire />,
  },
  {
    path: "/update-questionnaires/:id",
    element: <CreateQuestionnaire />,
  },
]);
const user = localStorage.user ? JSON.parse(localStorage.user) : undefined;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      {user?.logined == true && <Header />}
      <RouterProvider router={router} />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
