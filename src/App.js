import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import BottomMenu from "./layouts/BottomMenu";
import Navbar from "./layouts/Navbar";
import BridgeIndex from './pages/bridge/BridgeIndex';
import FarmIndex from './pages/farm/FarmIndex';
import PoolIndex from './pages/pool/PoolIndex';

import SwapIndex from "./pages/swap/SwapIndex";

function App() {
  return (
    <div className="min-h-screen flex flex-col font-barlow">

      <Router>

        <Navbar />

        <Routes>
          <Route path='/' element={ <SwapIndex /> } />
          <Route path='/swap' element={ <SwapIndex /> } />
          <Route path='/pool' element={ <PoolIndex /> } />
          <Route path='/farm' element={ <FarmIndex /> } />
          <Route path='/bridge' element={ <BridgeIndex /> } />
        </Routes>
        
        <BottomMenu />
      </Router>

    </div>
  );
}

export default App;
