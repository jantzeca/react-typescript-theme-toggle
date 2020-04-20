import React, { useContext } from 'react';
import { ThemeContext } from '../store/ThemeContextHandler';

const ThemeToggler: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    if (setTheme) {
      theme === 'light' ? setTheme('dark') : setTheme('light');
    }
  }

  return (
    <button style={{marginBottom: 50}} onClick={toggleTheme}>Toggle Theme</button>
  );
};

export default ThemeToggler;
