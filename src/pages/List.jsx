import React from 'react'
import {useParams} from 'react-router-dom'

export default function List() {
  const {id} = useParams()
  return (
    <h2>List-{id}</h2>
  )
}
