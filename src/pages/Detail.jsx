import React from 'react'
import {useSearchParams,useLocation} from 'react-router-dom'

export default function Detail() {
  const [params] = useSearchParams()
  const location = useLocation()
  console.log(params.getAll('id'))  // ['456']
  return (
    <h2>Detail-{location.state?location.state.id:""}</h2>
  )
}
