import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Navbar />
        <div className="flex-grow bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
          <MainContent />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;