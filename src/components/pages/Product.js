import { useParams } from "react-router-dom";
const Product = () => {
    let {category,id} = useParams();
    return (
        <h1>welcome to Product - category: {category} and id: {id}</h1>
    )
}
export default Product;