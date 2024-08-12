import './App.css';
import Shery from 'sheryjs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ip from './Pages/Ip';
import Vd from './Pages/Vd';
import Homepage from './Pages/Homepage';
import IPProductPage from './Pages/IPProductPage'; // Ensure the correct import
import VDProductPage from './Pages/VDProductPage'; // Ensure the correct import
import Contact from './Pages/Contact';

Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
});

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/ipcamera' element={<Ip />} />
          <Route path='/ipcamera/products/:id' element={<IPProductPage />} /> 
          <Route path='/videodoor' element={<Vd />} />
          <Route path='/videodoor/products/:id' element={<VDProductPage />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
