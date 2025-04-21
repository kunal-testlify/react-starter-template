import React from 'react';
import './Button.css';

/**
 * Button component for common actions
 * @param {Object} props - Component props
 * @param {string} props.variant - Button variant (primary, secondary, outlined)
 * @param {string} props.size - Button size (small, medium, large)
 * @param {function} props.onClick - Click handler function
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} Button component
 */
const Button = ({ 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  children, 
  className = '',
  ...rest 
}) => {
  return (
    <button
      className={`button button--${variant} button--${size} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;