import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Menu from './Components/Menu'
import Orders from './Components/Orders'
import { Tracking } from './Components/Tracking'
import { TeamMembers } from './Components/TeamMembers'
import './Components/Login.css'
import './Components/Orders.css'
import './Components/ProductsList.css'
import './Components/Products.css'

function App () {
  return (
        <section className='paths'>
            <Routes>
                <Route path="/" element={(<Login />)} />
                <Route path="/Menu" element={(<Menu />)} />
                <Route path="/Orders" element={(<Orders />)} />
                <Route path="/Tracking" element={(<Tracking />)} />
                <Route path="/TeamMembers" element={(<TeamMembers />)} />
            </Routes>
        </section>
  )
}
export default App
