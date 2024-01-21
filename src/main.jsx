import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root.jsx'
import Gigs from './routes/gigs.jsx'
import About from './routes/about.jsx'
import Music from './routes/music.jsx'
import ErrorPage from './error-page.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:   [
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Gigs",
        element: <Gigs />,
      },
      {
        path: "/Music",
        element: <Music />,
      },

    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
