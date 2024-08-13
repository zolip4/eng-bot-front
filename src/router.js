import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import HomePage from "./pages/Home";
import AboutPage from "./pages/Blog";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            // {
            //     path: "*",
            //     element: <NotFound />,
            // },
        ],
    },
]);