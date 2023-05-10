import React from 'react';
import Routs from './router/Routs';
import Provider from './context/to-do-list-Provider';
import './App.css';
import {Helmet} from "react-helmet";

function App() {
  return (
    <Provider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>To Do List</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Routs />
    </Provider>
  );
}

export default App;
