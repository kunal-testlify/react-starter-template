import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Button from '../components/common/Button';

/**
 * Home page component
 */
const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header 
        title="React Starter Template" 
        subtitle="A modern foundation for your next React project" 
      />
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Welcome to Your React App</h2>
              <p className="text-gray-600 mb-6">
                This template includes a modern project structure, helpful components, and utility functions to help you get started quickly.
              </p>
              
              <div className="flex flex-col items-center space-y-4">
                <div className="text-4xl font-bold">{count}</div>
                <div className="flex space-x-4">
                  <Button 
                    variant="secondary" 
                    onClick={() => setCount(count - 1)}
                    disabled={count <= 0}
                  >
                    Decrement
                  </Button>
                  <Button 
                    variant="primary" 
                    onClick={() => setCount(count + 1)}
                  >
                    Increment
                  </Button>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-md">
                <p className="text-sm text-gray-600">
                  Edit <code className="bg-gray-200 px-1 py-0.5 rounded">src/pages/Home.jsx</code> to modify this page
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;