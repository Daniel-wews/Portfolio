import './style.css'
export default function Me() {
    return (
        <section className='limitar-secao box-01'>

            
            <img className='img-perfil' src="./assets/checkmark.png" alt="Minha foto de perfil" />

            <div className='info-perfil'>
                <p>Olá, Eu sou o</p>
                <h1>Daniel Junior</h1>
                <p>Desenvolvedor Front-End</p>
                <div className='container-botoes'>
                    <button className='btn btn-color-2'>
                        <a download={true} href="./assets/Curriculo.pdf" target="_black">Download CV</a>
                    </button>

                    <button className='btn btn-color-1' onclick="location.href='./#contact'">
                        <a href="#contato">Contate-me</a>
                    </button>
                </div>
                <div id="container-icon">
                    <figure>
                    <a href="https://www.linkedin.com/in/daniel-junior-b49892272/" target="_blank" ><img className='icon' src="./assets/linkedin.png" alt="Meu linkedin" /></a>
                    </figure>
                    <figure>
                    <a href="https://github.com/Daniel-wews" target="_blank"><img className='icon' src="./assets/github.png" alt="Meu GitHub" /></a>
                    </figure>
                </div>
            </div>
        </section>
    )
}