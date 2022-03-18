import { FaCode } from "react-icons/fa"
import { DropdownButton } from "../DropdownButton/DropdownButton"

export function Header() {

    return (
        <header className='Header'>
            <span>
                <FaCode />
            </span>
            <DropdownButton/>
        </header>
    )
}