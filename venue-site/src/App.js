import logo from './logo.svg';
import './App.css';
import Landing from './Pages/Landing';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Nav/Footer';
import { Route, Routes} from 'react-router-dom'
import About from './Pages/About';
import Photos from './Components/Photos/Photos';
import Calendar from './Components/Calendar/Calendar';
import Contact from './Components/Contact/Contact';
import Pricing from './Components/Pricing/Pricing';
import { useAuth } from './Components/Hooks/auth-hook';
import { AuthContext } from './Context/auth-context';
import Auth from './Components/Auth/Auth';
import AdminPhotos from './Components/Photos/AdminPhotos';

function App() {

const {token, login, logout, userId} = useAuth()

  return (
    <AuthContext.Provider
    value={{
      isLoggedIn: !!token,
      userId: userId,
      token: token,
      login: login,
      logout: logout,
    }}
    
    >

    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/book" element={<Contact />} />
        <Route path="/adminlogin" element={<Auth />} />
        <Route path="/adminphotos" element={<AdminPhotos />} />
      </Routes>
      <Footer />

    </div>


    </AuthContext.Provider>
  
  
  );
}

export default App;
