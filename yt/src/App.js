import './App.css';
import React, {useState} from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './screen/home/Home';
import { Container } from 'react-bootstrap';
import './App.scss';
const App = () =>{

  const [sidebar, toggleSidebar] = useState(false)

  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return (
    <>
    <Header handleToggleSidebar={handleToggleSidebar}/>
    <div className='app__container border border-dark'>
      <Sidebar sidebar={sidebar} 
      handleToggleSidebar={handleToggleSidebar}/>
    <Container fluid className='app__main border border-dark'>
      <Home />
    </Container>
     </div>
    </>
  )
}

export default App;
