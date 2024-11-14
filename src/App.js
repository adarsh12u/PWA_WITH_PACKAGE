import React from 'react'
import Features from './Features'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import Home from './Home'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
    },
  {
  path: '/features',
  element: <Features />
  }])
const App = () => {
  return (
 
      <RouterProvider router={router}>
    <div>App</div>
     </RouterProvider>
    
      
  )
}

export default App