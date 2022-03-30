import './App.css';
import { Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Cotact';
import Navbar from './components/pages/Navbar';
import Product from './components/pages/Product';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Logout from './components/pages/Logout';

function App() {
  let isLogged = true;
  let data = {
    'st':'user not logged in'
  };
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<h1>Hello laxmi</h1>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/dashboard' element={isLogged ? <Dashboard/> : <Navigate to='/login' replace state={data}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/> 
        <Route path='/product/:category' element={<Product/>}/> 
        <Route path='/product/:category/:id' element={<Product/>}/> 
        <Route path='*' element={<h1>page not found 404 erroor </h1>}/> 
    </Routes>
    </>
  );
}

export default App;
