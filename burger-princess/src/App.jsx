import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LogIn } from './Components/LogIn'
import { Products } from './Components/Products'
import { Tracking } from './Components/Tracking'
import { TeamMembers } from './Components/TeamMembers'

function App() {
    return (
        <Routes>
            <Route path= "/" element={(<LogIn/>)}/>
            <Route path= "/Products" element={(<Products/>)}/>
            <Route path= "/Tracking" element={(<Tracking/>)}/>
            <Route path= "/TeamMembers" element={(<TeamMembers/>)}/>
        </Routes>
    )
}

export default App  