import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Informacion from './components/Informacion.jsx';
import Problema from './components/Problema.jsx';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '', element: <App />, children: [
      { path: '', element: <Informacion /> },
      { path: 'problema', element: <Problema /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
