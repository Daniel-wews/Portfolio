import './style.css'
export default function ItemLista(Props){
    return(
        <div className='container-props'>
            <figure>
                <img src={Props.imagem} alt={Props.alt} />
            </figure>
                <h3>{Props.nome}</h3>
                <div>
                    <button className='btn-project'><a  href={Props.link} target="_blank">GitHub</a></button>
                    <button className='btn-project'><a  href={Props.link02} target="_blank">Ver Site</a></button>
                </div>
        </div>
    )
}