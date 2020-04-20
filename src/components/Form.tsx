import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../store/ThemeContextHandler';

import './form.css';

const Form: React.FC = () => {
  let { theme } = useContext(ThemeContext);

  let [username, setUsername] = useState<string>('');
  let [password, setPassword] = useState<string>('');

  useEffect(() => {
    let themePath = `/${theme}Form.css`;
    let head: HTMLHeadElement = document.head;

    let oldLink: HTMLLinkElement | null = head.querySelector('#formStyle')
    if (oldLink) {
      oldLink.remove();
    }

    let link: HTMLLinkElement = document.createElement('link');

    link.id = 'formStyle';
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = themePath;

    head.appendChild(link);
  }, [theme]);

  const handleChange = (
    stateHandler: React.Dispatch<React.SetStateAction<string>>
  ) => (e: React.ChangeEvent<HTMLInputElement>): void => {
    stateHandler(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUsername('');
    setPassword('');
  };

  return (
    <div className='container'>
      <form onSubmit={onSubmit}>
        <div className='column'>
          <div className="row title align-center">
            <h1>
              Log In
            </h1>
          </div>
          <div className='row'>
            <label htmlFor='username'>Username</label>
            <input
              onChange={handleChange(setUsername)}
              type='text'
              name='username'
              id='username'
              value={username}
              placeholder='Username'
            />
          </div>
          <div className='row'>
            <label htmlFor='password'>Password</label>
            <input
              onChange={handleChange(setPassword)}
              type='password'
              name='password'
              id='password'
              value={password}
              placeholder='Password'
            />
          </div>
          <div className='row align-center'>
            <input type='submit' value='Submit' />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
