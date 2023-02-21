import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';

// components
import Header from './components/Header';
// pages
import Login from './pages/Login';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Location from './pages/Location';
import ChooseHotel from './pages/ChooseHotel';
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
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/register' element={<Register />} />
          <Route path='/location' element={<Location/>} />
          <Route path='/chooseHotel' element={<ChooseHotel />} />
          <Route path='/confirmation' element={<Confirmation/>} />
          <Route path='/notfound' element={<NotFound/>} />
          <Route path='/register' element={<Register/>} />
          <Route element={<LoggedinRoute />}>
            <Route path='/reservation' element={<Reservation/>} />
          </Route>
          {/* {Location.pathname !== '/reservation' && <Footer /> } */}
        </Routes>
      </Router>
    </>
  );
}
export default App;