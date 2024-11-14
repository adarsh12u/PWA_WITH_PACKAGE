import React from 'react'
import Features from './Features'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import Home from './Home'
import About from './About'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
    },
  {
  path: '/features',
  element: <Features />
  },
  {
    path: '/about',
    element: <About />
    }])
const App = () => {
  return (
 
      <RouterProvider router={router}>
    <div>App</div>
     </RouterProvider>
    
      
  )
}

export default App