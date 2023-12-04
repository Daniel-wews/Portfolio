import ItemLista from '../props'
import './style.css'
export default function Projetos(){
    return(
        <section id='projects' className='limitar-secao centraliza'>
            <p>Veja também meus</p>
            <h2 className='title'>Projetos</h2>
            <div className='todos-props'>
                <ItemLista imagem="./assets/Natal-02.png" nome="Projeto 1" link="https://github.com/Daniel-wews/Natal"  link02="https://daniel-wews.github.io/Natal/"/>
                <ItemLista imagem="./assets/Agencia-02.png" nome="Projeto 2" link="https://github.com/Daniel-wews/Agencia-de-viagens"  link02="https://daniel-wews.github.io/Agencia-de-viagens/"/>
                <ItemLista imagem="./assets/Sorveteria-02.png" nome="Projeto 3" link="https://github.com/Daniel-wews/Gelateria/tree/main/gelados"  link02="https://gelateria-flax.vercel.app/"/>
            </div>
        </section>
    )
}