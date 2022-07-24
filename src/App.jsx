
import './App.css';
import Home from './screens/home/Home';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Detail from './common/detail/Detail';


function App() {
  return (
    <>
    <BrowserRouter>
   <Routes>
   <Route exact path="/" element={<Home/>}/>
   <Route  exact path="/detail/:id" element={<Detail/>}/>
   <Route  path="*" element={<Home/>}/>
   </Routes>
   </BrowserRouter>
    
    </>
  );
}

export default App;
