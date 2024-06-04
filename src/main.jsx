import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Page2 from "./routes/Page2/Page2.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    component: App,

    children: [
      { path: "/", element: <Page2 /> },
      { path: "/bluetrack", element: <Page2 /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
