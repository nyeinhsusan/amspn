import React from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router'
import Home from './components/Home'
const App = () => {
  return (
    <div>
      <Navbar/>
<Routes>
 <Route path ="/" element={Home}/>
</Routes>
    </div>
  )
}

export default App