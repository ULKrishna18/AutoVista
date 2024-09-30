import './App.css';
import { Routes, Route} from 'react-router-dom';
import Homepage from './pages/homepage';
import CarDetails from './pages/CarDetails';
import Loginpage from './pages/loginpage';
import Signinpage from './pages/signinpage';
import CarList from './pages/CarList';
import Appoint from './pages/Appointment';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/cardetails' element={<CarDetails/>} />
      <Route path='/carlist' element={<CarList/>} />
      <Route path='/login' element={<Loginpage/>} />
      <Route path='/signup' element={<Signinpage/>} />
      <Route path='/appointment' element={<Appoint/>} />
    </Routes>
  );
}

export default App;
