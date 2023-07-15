
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';


// function App() {
//   return (
// <>
// <Navbar/>
// <About/>
// </>
// );
// }

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  )
}


export default App;
