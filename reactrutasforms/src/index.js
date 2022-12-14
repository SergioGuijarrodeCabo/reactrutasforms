import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import Router from './components/Router';

import MenuRutas from './components/MenuRutas';
import FormSimple from './components/FormSimple';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
         <h1>Página principal</h1>


                <MenuRutas />
                <hr/>   
                <Router/>

                 <hr/>  

                 <h2>Pie de páginas</h2>
                 <FormSimple  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
