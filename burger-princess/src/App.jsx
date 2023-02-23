import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Orders from './Components/Orders'
import { Products } from './Components/Products'
import { Tracking } from './Components/Tracking'
import { TeamMembers } from './Components/TeamMembers'
import './Components/Login.css'
import './Components/Orders.css'
function App () {
  return (
        <section className='paths'>
            <Routes>
                <Route path="/" element={(<Login />)} />
                <Route path="/Orders" element={(<Orders />)} />
                <Route path="/Products" element={(<Products />)} />
                <Route path="/Tracking" element={(<Tracking />)} />
                <Route path="/TeamMembers" element={(<TeamMembers />)} />
            </Routes>
        </section>
  )
}
export default App
