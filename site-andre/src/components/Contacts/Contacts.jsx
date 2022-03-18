import { FaLinkedin, FaWhatsapp, FaGithub, FaCode } from "react-icons/fa"
import { MdMail } from "react-icons/md"

export function Contacts() {
    return (
        <div className='contacts'>
            <a href="https://www.linkedin.com/in/andreluisdeoliveiraandrade/" target="blank"><FaLinkedin /></a>
            <a href='https://api.whatsapp.com/send?phone=5541998614302' target="blank"><FaWhatsapp /></a>
            <a href='https://github.com/anddreluis2' target="blank"><FaGithub /></a>
            <a href='https://mailto:anddreluis98@gmail.com' target="blank"><MdMail /></a>
        </div>
    )
}