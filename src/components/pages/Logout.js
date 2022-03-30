import { useLocation } from "react-router-dom";


const Logout = () => {
    let location = useLocation();
    return (
        <>
        <h1>welcome to home</h1>
        <h2> {location.state.name} is logged out</h2>
        </>
    )
}
export default Logout;