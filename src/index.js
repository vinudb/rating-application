import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';
import { startSetMovies } from './action/movies';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

//fetch the initial movies to populate in the list
store.dispatch(startSetMovies()).then(() => {
  ReactDOM.render(jsx, document.getElementById('root'));
});
