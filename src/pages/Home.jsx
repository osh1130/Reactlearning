import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Home() {
  const location = useLocation()
  console.log(location.state.num)
  return (
    <h2>Home</h2>
  )
}
