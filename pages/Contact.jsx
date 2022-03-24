import { Contacts } from "../src/components/Contacts/Contacts"
import { Header } from "../src/components/Header/Header"

export function Contact() {
    return (
        <>
            <Header />
            <h1>Contatos:</h1>
            <Contacts />
        </>
    )
}