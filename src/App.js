import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Classes from './Pages/Classes';
import Exercises from './Pages/Exercises';
import ContactUs from './Pages/ContactUs';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/classes" element={<Classes/>}/>
          <Route path="/exercises" element={<Exercises/>}/>
          <Route path="/contactUs" element={<ContactUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
