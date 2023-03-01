import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Orders from './Components/Orders'
import ProductsList from './Components/ProductsList'
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
                <Route path="/Orders" element={(<Orders />)} />
                <Route path="/ProductsList" element={(<ProductsList />)} />
                <Route path="/Tracking" element={(<Tracking />)} />
                <Route path="/TeamMembers" element={(<TeamMembers />)} />
            </Routes>
        </section>
  )
}
export default App
