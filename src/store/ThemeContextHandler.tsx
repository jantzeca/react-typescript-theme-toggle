import React, { createContext, useState } from 'react';

type contextProps = {
  theme: string,
  setTheme: Function
}

export const ThemeContext = createContext<Partial<contextProps>>({});

const ThemeContextProvider = (props: any) => {
  let [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
