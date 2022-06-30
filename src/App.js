import React from "react"
import Pages from "./Components/Pages/Pages"
import Landing from "./Components/Landing/Landing"
import Documentation from "./Components/Documentation/Documentation"
import Accounts from "./Components/Accounts/Accounts"
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route  path='/'  element={<Landing />}  exact>
          </Route>
          <Route path='/Documentation' element={<Documentation />} exact>
          </Route>
          <Route path='/Pages' element={<Pages />} exact>
          </Route>
          <Route path='/Accounts' element={<Accounts />} exact>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App