import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home } from '../pages/Home'
import { About } from "../pages/About"
import { Contact } from "../pages/Contact"
import './App.scss'
import { Projects } from "../pages/Projects"

function App() {

  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
