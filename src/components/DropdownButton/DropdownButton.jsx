import { BsList } from "react-icons/bs"
import { Link } from "react-router-dom"
import './DropdownButton.scss'

export function DropdownButton() {
    return (
        <div className="dropdown">
            <button className="dropbtn"><BsList /></button>
            <div className="dropdown-content">
                <Link to="/about">Sobre</Link>
                <Link to="/contact">Contato</Link>
                <Link to="/projects">Projetos</Link>
            </div>
        </div>
    )
}