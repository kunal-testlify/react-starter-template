import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '../hooks/useLocalStorage';

// Create context
const ThemeContext = createContext();

// Theme options
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
};

/**
 * Theme provider component
 */
export const ThemeProvider = ({ children }) => {
  // Use localStorage to persist theme preference
  const [userTheme, setUserTheme] = useLocalStorage('theme', THEMES.SYSTEM);
  const [theme, setTheme] = useState(userTheme);

  // Effect to handle system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (userTheme === THEMES.SYSTEM) {
        setTheme(mediaQuery.matches ? THEMES.DARK : THEMES.LIGHT);
      }
    };
    
    // Set initial theme
    handleChange();
    
    // Listen for changes
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [userTheme]);

  // Effect to apply theme to document
  useEffect(() => {
    document.documentElement.classList.remove(THEMES.LIGHT, THEMES.DARK);
    
    const effectiveTheme = 
      theme === THEMES.SYSTEM
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
          ? THEMES.DARK
          : THEMES.LIGHT
        : theme;
        
    document.documentElement.classList.add(effectiveTheme);
  }, [theme]);

  // Toggle between light and dark
  const toggleTheme = () => {
    setUserTheme(prevTheme => 
      prevTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
    );
  };

  // Set specific theme
  const setThemePreference = (newTheme) => {
    setUserTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme: userTheme, toggleTheme, setTheme: setThemePreference }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Hook to use the theme context
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;