import React from 'react';
import { Container } from 'reactstrap';
import './App.css';
import Header from './pages/Header';
import Navigation from './pages/Navbar';
import Home from './pages/Home';
import ImageLibrary from './pages/ImageLibrary';
import Gallery from './pages/Gallery';
import Footer from './pages/Footer';

function App() {
    return (
      <div >
        <Container>
          <Header />
          <Navigation />
          <div className="row">
            <ImageLibrary />
          </div>
          <Footer />
        </Container>
      </div>
    );
}

export default App;
