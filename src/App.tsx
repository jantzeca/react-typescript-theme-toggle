import React from 'react';
import Form from './components/Form';
import ThemeToggler from './components/ThemeToggler';
import ThemeContextProvider from './store/ThemeContextHandler';

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <div className="App" style={{
        display: 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'flexDirection': 'column',
        height: '100vh',
        width: '100vw'
      }}>
        <ThemeToggler />
        <Form />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
