import React from 'react'
import Features from './Features'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([{
  path: '/features',
  element: <Features />
  }])
const App = () => {
  return (
 
      <RouterProvider router={router}>
    <div>App</div>
     <Link to={'/features'}> go to the features ok then bro</Link>
     </RouterProvider>
    
      
  )
}

export default App