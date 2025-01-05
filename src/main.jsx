import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
// import Help from './components/Help/Help'
import Login from './components/Login/Login.Jsx'
import User from './components/User/User'
import Github from './components/Github/Github'


const router = createBrowserRouter([

  {
    path:'/',
    element: <App/>,
    children:[

      {
        path:'/',
        element: <Home/>
      },

      {
        path:'/about',
        element: <About/>
      },

      {
        path:'/contact',
        element: <Contact/>
      },

      {
        path:'/github',
        element: <Github/>
      },

      {
        path:'/login',
        element: <Login/>
      },

      {
        path:'/user/:userid/:username',
        element: <User/>
      },
    ]
  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
