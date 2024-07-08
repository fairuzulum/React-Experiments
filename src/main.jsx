import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Hook from "./Hook";
import Home from "./Home";
import UseEffect from "./UseEffect";
import CustomHook from "./CustomHook";
import UseForm from "./UseForm";
import CounterRedux from "./redux/CounterRedux";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Login from "./pages/Login";
import { CounterProvider } from "./context/CounterContext";
import CounterWithContext from "./context/CounterWithContext";
import AxiosPage from "./pages/AxiosPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/count",
    element: <App />,
  },
  {
    path: "/reducer",
    element: <Hook />,
  },
  {
    path: "/useeffect",
    element: <UseEffect />,
  },
  {
    path: "/customhook",
    element: <CustomHook />,
  },
  {
    path: "/useform",
    element: <UseForm />,
  },
  {
    path: "/redux",
    element: <CounterRedux />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/contex",
    element: <CounterWithContext />,
  },
  {
    path: "/api",
    element: <AxiosPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </CounterProvider>
  </React.StrictMode>
);
