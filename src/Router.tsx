import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Event } from './pages/Event'
import Home from './pages/Home'

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/event' element={<Event/>}/>
      <Route path='/event/lesson/:slug' element={<Event/>}/>
    </Routes>
  )
}
