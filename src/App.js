import './App.css';
import { Router, Routes, Route} from 'react-router-dom';
import Home from './UI/Home';
import Header from './UI/Header';
import About from './UI/About';
function App() {
  return (
      <Routes>
        <Route path='/' element={<><Header/><Home></Home></>}>
          
        </Route>

        <Route path='/about-us' element={<><Header/><About></About></>}>
          
        </Route>
        
      </Routes>
  );
}

export default App;
