import React, { useState } from 'react';
import Button from '../../components/Button';
import './Home.css';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="home-container">
      <h1>React Starter Template</h1>
      
      <div className="card">
        <p>
          Welcome to your new React application! This template includes a basic
          project structure to help you get started quickly.
        </p>
        
        <div className="counter-section">
          <p>Counter value: {count}</p>
          <div className="button-group">
            <Button 
              onClick={() => setCount(count - 1)}
              variant="outlined"
              aria-label="Decrement counter"
            >
              -
            </Button>
            <Button 
              onClick={() => setCount(count + 1)}
              variant="primary"
              aria-label="Increment counter"
            >
              +
            </Button>
          </div>
        </div>
      </div>
      
      <div className="info-section">
        <h2>Getting Started</h2>
        <p>
          Edit <code>src/pages/Home/Home.jsx</code> to modify this page or create new
          components in the <code>src/components</code> directory.
        </p>
        <p>
          Check the README.md file for more information on the project structure
          and available scripts.
        </p>
      </div>
    </div>
  );
};

export default Home;