import React, { useEffect } from 'react'
import Features from './Features'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import Home from './Home'
import About from './About'
import { genratetoken } from './firebase'


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
  useEffect(() => {
    genratetoken();
  })
  return (
 
      <RouterProvider router={router}>
    <div>App</div>
     </RouterProvider>
    
      
  )
}

export default App