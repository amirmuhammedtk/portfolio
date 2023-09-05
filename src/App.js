import { Outlet } from 'react-router-dom';
import About from './About';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import Navb from './NavBar';
import Qualification from './Qualification';
import Skills from './Skills';
import Navigat from './Navigat';

function App() {
  return (
    <div className="App">
      <div>
      <Navb/>
      </div>
      <div>
        <Home/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Qualification/>
      </div>
      <div>
        <Skills/>
      </div>
      <div>
        <Contact/>
      </div>
      <Outlet/>
    </div>
    
    
  
  );
}

export default App;
