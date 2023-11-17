import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import SinglePage from '../pages/SinglePage'

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/:id" element={<SinglePage/>} />
    </Routes>
  )
}

export default AllRoute
