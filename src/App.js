import './App.css';
import { Router, Routes, Route, BrowserRouter,useLocation} from 'react-router-dom';
import Home from './UI/Home';
import Header from './UI/Header';
import About from './UI/About';
import AboutHeader from "./UI/AboutHeader"
import { useLayoutEffect } from 'react'

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

function App() {
  return (
    <BrowserRouter>
    <Wrapper>
      <Routes>
        <Route path='/' element={<><Header/><Home></Home></>}>
          
        </Route>

        <Route path='/about-us' element={<><AboutHeader/><About></About></>}>
          
        </Route>
      </Routes>
      </Wrapper>
      </BrowserRouter>
  );
}

export default App;
