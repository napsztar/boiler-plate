import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from "redux";
import promiseMiddleware from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import rootReducer from './_reducers'

const root = ReactDOM.createRoot(document.getElementById('root'));

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)
root.render(
    <Provider store={createStoreWithMiddleware(rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__&&
                    window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
    >
  <React.StrictMode>
    <App />
  </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
