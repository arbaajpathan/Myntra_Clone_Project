import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Bag from './Bag.jsx'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Home.jsx'
import { Provider } from 'react-redux'
import Myntra_store from '../../store/Store.js'
import "bootstrap/dist/css/bootstrap.min.css"


const router = createBrowserRouter([{ path: "/", element: <App />, children: [{ path: "/", element: <Home /> },{ path: "/bag", element: <Bag /> }] }])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Myntra_store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
