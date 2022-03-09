
import './App.scss'
import { FaLinkedin, FaWhatsapp, FaGithub, FaCode } from "react-icons/fa"
import { MdMail } from "react-icons/md"
import { BsList } from "react-icons/bs"






function App() {

  return (
    <div className="App">
      <header className='Header'>
        <span>
          <FaCode />
        </span>
        <div className="dropdown">
          <button className="dropbtn"><BsList /></button>
          <div class="dropdown-content">
            <a href="#">Sobre</a>
            <a href="#">Contato</a>
            <a href="#">Projetos</a>
          </div>
        </div>
      </header>
      <h1 className="name">André Luis de Oliveira</h1>
      <p>Front-End Developer</p>
      <div className='contacts'>
        <a href="https://www.linkedin.com/in/andreluisdeoliveiraandrade/" target="blank"><FaLinkedin /></a>
        <a href='https://api.whatsapp.com/send?phone=5541998614302' target="blank"><FaWhatsapp /></a>
        <a href='https://github.com/anddreluis2' target="blank"><FaGithub /></a>
        <a href='https://mailto:anddreluis98@gmail.com' target="blank"><MdMail /></a>
      </div>
      <footer className='footer'>Desenvolvido por neymar junior</footer>
    </div>
  )
}

export default App
