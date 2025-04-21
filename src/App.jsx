import React from 'react';
import './App.css';
import Home from './pages/Home';
import Footer from './components/layout/Footer';
import { ThemeProvider } from './context/ThemeContext';

/**
 * Main App component
 * This is the root component of your application
 */
function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Home />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
