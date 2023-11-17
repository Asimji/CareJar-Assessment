import React from 'react'
import { useParams } from 'react-router-dom'

const SinglePage = () => {
    const val=useParams()
    console.log(val)
  return (
    <div>
      Single Page
    </div>
  )
}

export default SinglePage
