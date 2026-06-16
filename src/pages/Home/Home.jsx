import { useEffect, useState } from 'react'
import './style.css'



function Home() {
    // LOADING - existe quando requisita algo para algo externo
    const [ carregando, setCarregando ] = useState(true);
    const [ personagens, setPersonagens ] = useState([]);

    useEffect(() => {
        async function carregar() {
            const dados = await getCharacters()
            setPersonagens(dados)
            setCarregando(false)
        }

        carregar()
    }, [])

    if (carregando) {
        return (
            <> CARREGANDO ... </>
        )
    }

    return(
        <div className='home page'>
            <h2 className='titulo-lista'>Personagens - Harry poter  </h2>

            <div className='lista-personagens'>
                {personagens.map((personagem) => (
                    <Card personagem={personagem} />
                ))}
            </div>
        </div>
    )
}

export default Home