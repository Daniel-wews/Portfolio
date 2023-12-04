import './style.css'
export default function AboutMe(){
    return(
        <section id="about" className='limitar-secao centraliza'>
            <p>Conheça mais</p>
            <h2>Sobre mim</h2>
            <div className='box-02'>
                <figure className='foto-perfil-02'>
                    <img src="./assets/email.png" alt="" />
                </figure>

                <div className='sobre-mim'>
                    <div>
                    <figure>
                        <img className='icon' src="./assets/experience.png" alt="" />
                        <h3>Experiencia</h3>
                        <figcaption>Pizzaria Napoles 2 anos.</figcaption>
                    </figure>

                    <figure>
                        <img className='icon' src="./assets/education.png" alt="" />
                        <h3>Educação</h3>
                        <figcaption>Cursando analise e desenvolvimento de sistemas</figcaption>
                    </figure>
                    </div>
                    
                    <p>
                    Sou estudante de Analise e desenvolvimento de sistemas, estudo programação a 1 ano focado em front-end através da plataforma DevMedia e tambem tive a oportunidade de participar do programa VaiNaWeb front-end.
                    </p>
                </div>
            </div>
        </section>
    )
}