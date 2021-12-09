import {Navigate, Route, Routes} from 'react-router-dom';

import Home from './routes/Home';

import "./App.css";
import Auth from './routes/Auth';

function App() {
  const isLoggedIn = window.localStorage.getItem('loginstate');

  return (
    <Routes>
        <Route exact path='/' element={<Auth />}/>
        {isLoggedIn ? <Route exact path='/home' element={<Home />} /> : <Navigate to='/' />}
    </Routes>
  )
}

export default App;
