import "./style.css"

type CardProps = {
    Nome: string;
    Img: string;
    Email: string;
    Rm: number;
    Funcao: string;
    
}
const Card = ({Nome, Img, Email, Rm, Funcao} : CardProps) => {

    return(
        <div className="card">
            <h1>{Nome}</h1>
            <img src={Img} />
            <h3>{Email}</h3>
            <h3>{Rm}</h3>
            <h5>{Funcao}</h5>
        </div>
    )


}

export default Card;