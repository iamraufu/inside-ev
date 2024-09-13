import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Footer from './pages/Footer';
// import PrivateOutlet from './components/PrivateOutlet';

function App() {
  return (
    <AuthProvider>
     <div className="flex flex-col min-h-screen ">
        <Navbar />
        <div className="flex-grow  w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Contact />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
