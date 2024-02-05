import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';


function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;