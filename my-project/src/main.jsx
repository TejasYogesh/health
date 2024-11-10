import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx';
import { FirebaseProvider } from './Context/Firebase.jsx';
import './index.css'
import Stroke from './Pages/Stroke.jsx';
import App from './App.jsx'
// import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Excretory from './Pages/Subjects/Excretory.jsx';
import Electric from './Pages/Subjects/Electric.jsx';
import Graph2 from './Components/Graph2.jsx';
const router = createBrowserRouter([
  {
    path: '/stroke',
    element: <Stroke />
  },
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/Register',
    element: <Register />
  },
  {
    path:'/excretory',
    element:<Excretory/>
  },
  {
    path:'/electric',
    element:<Electric/>
  },
  {
    path:'/graph',
    element:<Graph2/>
  }
 
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    <FirebaseProvider>
      <RouterProvider router={router} />
      <App />
    </FirebaseProvider>
    {/* </BrowserRouter> */}
  </StrictMode>,
)
