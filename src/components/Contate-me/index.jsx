import './style.css'
export default function Contato(){
    return(
        <footer id='contato' className='limitar-secao centraliza'>
            <p>quer saber um pouco mais?</p>
            <h2>Contate-me</h2>
            
            <div>
                <button>
                    <img className='icon' src="./assets/email.png" alt="Meu email" />
                    <a href="mailto:daniel1236100@gmail.com" target='_blank'>Email</a>
                </button>
                    
                <button>
                    <img className='icon' src="./assets/linkedin.png" alt="Meu linkedin" />
                    <a href="https://www.linkedin.com/in/daniel-junior-b49892272/" target='_blank'>Linkedin</a>
                </button>
                </div>
                
            

            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contato">Contact</a></li>
                </ul>
            </nav>
        </footer>
    )
}