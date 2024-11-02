import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
// import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Footer from './pages/Footer';
import SignIn from './pages/SignIn';
import ViewData from './pages/ViewData';
// import PrivateOutlet from './components/PrivateOutlet';

function App() {
  return (
    <AuthProvider>
     <div className="flex flex-col min-h-screen relative">
        <Navbar />
        <div className="flex-grow  w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Services />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/view-data" element={<ViewData />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
       
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
