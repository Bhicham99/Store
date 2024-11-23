import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Home from './compoment/Home';
import Store from './compoment/Store';
import About from './compoment/About';
import Navigation from './compoment/Navigation';
import { Container } from 'react-bootstrap';
import ShopingCarteProvider from './context/ShopingCarteProvider';
import SearshItem from './compoment/SearshItem';


function App() {
  return (
  

    <ShopingCarteProvider>
    <Navigation/>
    <Container className=''>
      <SearshItem className='Searsh'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>

    </Container>
    </ShopingCarteProvider>
    
  );
}

export default App;
