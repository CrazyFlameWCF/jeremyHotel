import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';

// components
import Header from './components/Header';

// pages
import Login from './pages/Login';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Location from './pages/Location';
import ChooseHotel from './pages/ChooseHotel';
import ChooseDate from './pages/ChooseDate';
import Reservation from './pages/Reservation';
import Confirmation from './pages/Confirmation';
import NotFound from './pages/NotFound';

const App = (props) => {

  const LoggedinRoute = (props) => {
    if(sessionStorage.length === 0){
      return <Navigate to='/login'/>
    } else {
      return <Outlet />
    }
  }

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/register' element={<Register />} />
          <Route path='/location' element={<Location/>} />
          <Route path='/chooseHotel' element={<ChooseHotel />} />
          <Route path='/chooseDate' element={<ChooseDate /> } />
          <Route path='/confirmation' element={<Confirmation/>} />
          <Route element={<LoggedinRoute />} />
          <Route path='/reservation' element={<Reservation/>} />
        </Routes>
      </Router>
    </>
  );
}
export default App;