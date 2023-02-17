import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './screen/home/Home';
import { Container } from 'react-bootstrap';
import './App.scss';
import Login from './screen/login/login';
import { Redirect, Route, Switch, useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Layout = ({children}) => {
  const [sidebar, toggleSidebar] = useState(false)

  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return (
        <>
    <Header handleToggleSidebar={handleToggleSidebar}/>
    <div className='app__container border border-dark'>
      <Sidebar sidebar={sidebar} 
      handleToggleSidebar={handleToggleSidebar}/>
    <Container fluid className='app__main border border-dark'>
      {children}

    </Container>
     </div>
    </>
  )
}
const App = () => {
  const { accessToken, loading } = useSelector(state => state.auth)

  const history = useHistory()

  useEffect(() => {
     if (!loading && !accessToken) {
        history.push('/auth')
     }
  }, [accessToken, loading, history])

 
  return (
  
   <Switch>
    <Route path='/' exact>
      <Layout>
        <Home />
      </Layout>
    </Route>
  <Route path='/auth'>
    <Login />
  </Route>

  <Route path='/search'>
    <Layout>
      <h1>검색 결과</h1>
    </Layout>
  </Route>

  <Route>
    <Redirect to='/'></Redirect>
  </Route>

  </Switch>

  
  )
  
}

export default App;
