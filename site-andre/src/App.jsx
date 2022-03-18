
import './App.scss'
import { Contacts } from './components/Contacts/Contacts'
import { Header } from './components/Header/Header'
import { Info } from './components/Info/Info'
import { Footer } from './components/Footer/Footer'


function App() {

  return (
    <div className="App">
      <Header />
      <Info />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
