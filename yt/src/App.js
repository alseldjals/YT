import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './screen/home/Home';
import { Container } from 'react-bootstrap';
import './App.scss';
const App = () =>{
  return (
    <>
    <Header />
    <div className='app__container border border-info'>
      <Sidebar />
    <Container fluid className='app__main border border-warning'>
      <Home />
    </Container>
     </div>
    </>
  )
}

export default App;
