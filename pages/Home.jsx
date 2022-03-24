import { Contacts } from '../src/components/Contacts/Contacts'
import { Header } from '../src/components/Header/Header'
import { Info } from '../src/components/Info/Info'
import { Footer } from '../src/components/Footer/Footer'

export function Home() {
    return (
        <>
            <Header />
            <Info />
            <Contacts />
            <Footer />
        </>
    )
}