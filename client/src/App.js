import React from 'react';
import './App.css';

import Header from './pages/Header';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Footer from './pages/Footer';


function App() {
    return (
      <div>
        <Header />
        <Navbar />
        <div className="row">
          <Home />
        </div>
        <Footer />
      </div>
    );
}

export default App;
