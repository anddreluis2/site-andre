
import './App.scss'
import { Contacts } from './components/Contacts/Contacts'
import { Header } from './components/Header/Header'
import {Info } from './components/Info/Info'


function App() {

  return (
    <div className="App">
      <Header />
      <Info />
      <Contacts/>
      <footer className='footer'>Desenvolvido por neymar junior</footer>
    </div>
  )
}

export default App
