import './App.css';
import { Router, Routes, Route} from 'react-router-dom';
import Home from './UI/Home';
import Navbar from './UI/Navbar';
function App() {
  return (
      <Routes>
        <Route path='/' element={<><Navbar/><Home></Home></>}>
          
        </Route>
        
      </Routes>
  );
}

export default App;
