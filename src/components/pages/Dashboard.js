import {  useNavigate } from "react-router-dom";


const Dashboard = () => {
    let navigate = useNavigate();
    let data = {
        'name':'laxmii yadav'
    }
    return (
        <>
            <h1>welcome to Dashboard</h1>
            <button onClick={()=>{navigate('/logout',{state:data})}} >Logout</button>
        </>
    )
}
export default Dashboard;