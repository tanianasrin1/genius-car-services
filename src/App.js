import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shered/Footer/Footer';
import Header from './Pages/Shered/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
       <Routes>
         <Route path = "/" element = {<Home></Home>} ></Route>
         <Route path = "/about" element = {<About></About>} ></Route>
       </Routes>
    
    <Footer></Footer>

    </div>
  );
}

export default App;

