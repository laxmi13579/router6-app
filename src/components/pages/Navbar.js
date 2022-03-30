import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <>
        <ul>
            <li><NavLink to='/' style={({isActive})=>  {return {backgroundColor: isActive ? 'blue' : ''}}}>Home</NavLink></li>
            <li><NavLink to='/about' style={({isActive})=>  {return {backgroundColor: isActive ? 'blue' : ''}}}>About</NavLink></li>
            <li><NavLink to='/contact' style={({isActive})=>  {return {backgroundColor: isActive ? 'blue' : ''}}}>Contact</NavLink></li>
            <li><NavLink to='/product/mobile' style={({isActive})=>  {return {backgroundColor: isActive ? 'blue' : ''}}}>Product by Category</NavLink></li>
            <li><NavLink to='/product/mobile/1' style={({isActive})=>  {return {backgroundColor: isActive ? 'blue' : ''}}}>Product by id</NavLink></li>

        </ul>
        </> 
    )
}
export default Navbar;