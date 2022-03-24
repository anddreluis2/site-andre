import { FaCode } from "react-icons/fa"
import { Link } from "react-router-dom"
import { DropdownButton } from "../DropdownButton/DropdownButton"
import './Header.scss'

export function Header() {

    return (
        <header className='Header'>
            <span>
                <Link to="/">
                    <FaCode />
                </Link>
            </span>
            <DropdownButton />
        </header>
    )
}