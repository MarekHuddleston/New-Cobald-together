import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Properties from './components/Properties/Properties';
import SellerForm from './components/Sellerform';
import BuyerForm from './components/Buyerform';
import LandingPage from './components/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <main>
          <Routes>
            <Route path="/Properties" element={<Properties />} />
            <Route path="/seller" element={<SellerForm />} />
            <Route path="/buyer" element={<BuyerForm />} />
            <Route path="/LandingPage" element={<LandingPage />}/>
          </Routes>
        </main>

      </BrowserRouter>
    </div>
  );
}

export default App;
