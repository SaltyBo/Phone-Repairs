import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './My Component/Navbar';
import Main from './My Component/Main';
import Footer from './My Component/Footer';
import AdvancedJS from './My Component/AdvancedJS';
import FAQ from './My Component/FAQ';
import Invoice from './My Component/Invoice';

function App() {
  //Variable

  //Methods

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/AdvancedJS" element={<AdvancedJS />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
