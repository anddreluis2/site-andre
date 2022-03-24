import { BsList } from "react-icons/bs"
import './DropdownButton.scss'

export function DropdownButton() {
    return (
        <div className="dropdown">
            <button className="dropbtn"><BsList /></button>
            <div className="dropdown-content">
                <a href="#">Sobre</a>
                <a href="#">Contato</a>
                <a href="#">Projetos</a>
            </div>
        </div>
    )
}