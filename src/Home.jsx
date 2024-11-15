import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
      <div>
               <Link to={'/features'}> go to the features ok then bro</Link>
      <p>{  JSON.parse(localStorage.getItem('msg_token'))}</p>
    </div>
  )
}

export default Home