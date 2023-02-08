import React from 'react';
import ReactDOM from 'react-dom/client';
import {legacy_createStore as createStore} from 'redux'
import './index.css';
import App from './components/App'; 
import movies from './reducers';


const store = createStore(movies);
console.log("store",store)
console.log("store",store.getState())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

