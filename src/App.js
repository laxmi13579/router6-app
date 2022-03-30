import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Cotact';
import Navbar from './components/pages/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<h1>Hello laxmi</h1>}/>
        <Route path='/home/' element={<Home/>}/>
        <Route path='/About/' element={<About/>}/>
        <Route path='/Contact/' element={<Contact/>}/> 
    </Routes>
    </>
  );
}

export default App;
