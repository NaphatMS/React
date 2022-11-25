import { NavBar } from './NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

import Bisection from './Page/ROE/Bisection';
import False from './Page/ROE/False';
import OnePoint from './Page/ROE/One-Point';
import Newton from './Page/ROE/Newton';
import Secant from './Page/ROE/Secant';
import Carmer from './Page/Linear/Carmer';
import newpage from './Page/Linear/newpage';

function App() {

  
  return (
    
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>

                    // * add path 
        <Route path="/Bisection" element={<Bisection/>}/>
        <Route path="/test" element={<test/>}/>
        <Route path="/One-Point" element={<OnePoint/>}/>
        <Route path="/Newton-Raphson" element={<Newton/>}/>
        <Route path="/Secant" element={<Secant/>}/>
        <Route path="/Carmer" element={<Carmer/>}/>
        <Route path="/newpage" element={<newpage/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

  
