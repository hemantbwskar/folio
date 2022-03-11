
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link ,Routes} from 'react-router-dom';
import Navbar from './FolioContainer/Navbar/Navbar';
import Footer from './FolioContainer/Home/Footer/Footer';
import Home from './FolioContainer/Home/Home';
import ProjectList from './FolioContainer/ProjectList/ProjectList';
import Contact from './FolioContainer/Contact/Contact';

function App() {
  return (
    <Router>
    <div className='App'>
    
    <Routes>
                 <Route exact path='/folio' element={< Home />}></Route>
                 <Route exact path='/folio/projectlist' element={< ProjectList />}></Route>
                 <Route exact path='/folio/contact' element={< Contact />}></Route>
          </Routes>
    </div>
      </Router>
  );
}

export default App;
