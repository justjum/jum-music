import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root.jsx'
import Gigs from './routes/gigs.jsx'
import About from './routes/about.jsx'
import Music from './routes/music.jsx'
import Covers from './routes/covers.jsx'
import Originals from './routes/originals.jsx'
import Contact from './routes/contact.jsx'
import Login from './routes/login.jsx'
import ErrorPage from './error-page.jsx'
import Index from './routes/index.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:   [
      {
        element: <Index />,
        index: true,
      },
      {
        path: "/About",
        element: <About />,
        index: true,
      },
      {
        path: "/Gigs",
        element: <Gigs />,
      },
      {
        path: "/Music",
        element: <Music />,
        children: [
          {
            path: "Music/Covers",
            element: <Covers />,
          },
          {
            path: "Music/Login",
            element: <Login />
          },
          {
            path: "Music/Originals",
            element: <Originals />,
          }
        ]
      },
      {
        path: "/Contact",
        element: <Contact />,
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
