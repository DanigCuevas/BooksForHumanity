
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import DemoProfile from './components/DemoProfile';
import Cart from './components/Cart';
import { Route, Routes } from 'react-router-dom';




function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/demoProfile" element={<DemoProfile/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </>
  )
}


export default App;
