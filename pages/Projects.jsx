import { Header } from "../src/components/Header/Header"
import { Footer } from "../src/components/Footer/Footer"
import { useEffect, useState } from "react";

export function Projects() {

    const [repositories, setRepositories] = useState([]);


    useEffect(() => {
        fetch('https://api.github.com/users/anddreluis2/repos', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    return (
        <>
            <Header />
            <h1>Lista de Repositórios</h1>

            {repositories.map(repository => {
                return (
                    <ul className="repo-list">
                        <li>
                            <a href={repository.html_url}>
                                <p>Nome: {repository.name}</p>
                                <p>Descrição: {repository.description}</p>
                            </a>
                        </li>
                    </ul>
                )
            }
            )}
        </>
    )
}