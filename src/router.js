import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ExperiencePage from "./pages/Experience";
import BlogPage from "./pages/Blog";
import ContactsPage from "./pages/Contacts";

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
            {
                path: "/experience",
                element: <ExperiencePage />,
            },
            {
                path: "/blog",
                element: <BlogPage />,
            },
            {
                path: "/contacts",
                element: <ContactsPage />,
            },
            // {
            //     path: "*",
            //     element: <NotFound />,
            // },
        ],
    },
]);