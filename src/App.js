import './App.css';
import { Router, Routes, Route} from 'react-router-dom';
import Home from './UI/Home';
import Header from './UI/Header';
function App() {
  return (
      <Routes>
        <Route path='/' element={<><Header/><Home></Home></>}>
          
        </Route>
        
      </Routes>
  );
}

export default App;
