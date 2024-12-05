import { useParams } from "react-router-dom";

function ProductDetail(){
    const { id } = useParams();//Extraemos el id de la url

    return <h1>Detalle del producto: { id }</h1>;
    
}

export default ProductDetail;