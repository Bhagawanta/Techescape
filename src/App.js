import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Service } from './components/Service';
import { BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Contact/>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
