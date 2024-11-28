/* eslint-disable react/prop-types*/ //es necesario instalar o agregar este comentario

function WelcomCard(props) {
    return(
        <div style={{ border: "1px solid #ccc", padding:"10px", margin: "10px"}}>
            <h2>Hola, {props.name}</h2>
            <p> Esperamos que disfrutes tu experiencia en React</p>
        </div>
    );
}
export default WelcomCard;