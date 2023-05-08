import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '/.App';
import './index.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Item1 from './pagesnav/Item1';
import Item2 from './pagesnav/Item2';
import Item3 from './pagesnav/Item3';
import Pagina1 from './pagina1/pagina1';
import Catalogo from './filmes/Catalogo';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "Sejam bem vindes",
                element: <Pagina1 />
            },
            {
                path: "Sejam bem vindes",
                element: <Item1 />
            },
            {
                path: "Catalogo",
                element: <Item2 />
            },
            {
                path: "Favoritos",
                element: <Item3 />
            },
            {
                path: "/Filmes/:id",
                element: <Catalogo />
            },
            {
                path: "fail",
                element: <Navigate to="Filmes" />
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);