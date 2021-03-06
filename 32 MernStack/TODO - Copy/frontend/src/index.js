import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux';
// import thunk from "redux-thunk"
// import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import userReducer from "./features/user-feature"
import fetchReducer from "./features/fetch-reducer"
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer:{
    user:userReducer,
    fetchReducer:fetchReducer
  }
})

ReactDOM.render(
  <Provider store = {store}>
        <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
