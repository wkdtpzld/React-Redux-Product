import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './redux/store';
import { Provider } from "react-redux";
import App from './App';
import Cart from './components/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Cart />
    <App className="App"/>
  </Provider>
);