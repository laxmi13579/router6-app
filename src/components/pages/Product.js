import { useParams, useSearchParams } from "react-router-dom";
const Product = () => {
    let {category,id} = useParams();
    let [searchParams,setSearchParams] = useSearchParams();
    console.log(searchParams);
    return (
        <h1>welcome to Product - category: {category} and id: {id}</h1>
    )
}
export default Product;