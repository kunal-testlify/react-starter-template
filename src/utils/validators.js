/**
 * Utility functions for form validation
 */

/**
 * Check if a string is a valid email
 * @param {string} email - The email to validate
 * @returns {boolean} - Whether the email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Check if a string is empty
 * @param {string} value - The string to check
 * @returns {boolean} - Whether the string is empty
 */
export const isEmpty = (value) => {
  return value === undefined || value === null || value.trim() === '';
};

/**
 * Check if a password meets minimum requirements
 * @param {string} password - The password to validate
 * @param {Object} options - Validation options
 * @returns {boolean} - Whether the password is valid
 */
export const isValidPassword = (password, options = {}) => {
  const {
    minLength = 8,
    requireUppercase = true,
    requireLowercase = true,
    requireNumbers = true,
    requireSpecialChars = true,
  } = options;

  if (isEmpty(password) || password.length < minLength) {
    return false;
  }

  if (requireUppercase && !/[A-Z]/.test(password)) {
    return false;
  }

  if (requireLowercase && !/[a-z]/.test(password)) {
    return false;
  }

  if (requireNumbers && !/\d/.test(password)) {
    return false;
  }

  if (requireSpecialChars && !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
    return false;
  }

  return true;
};

/**
 * Check if a value is a valid URL
 * @param {string} url - The URL to validate
 * @returns {boolean} - Whether the URL is valid
 */
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};