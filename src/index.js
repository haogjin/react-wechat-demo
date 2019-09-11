import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/less/font-awesome.less';
import 'react-fontawesome';
import 'antd-mobile/dist/antd-mobile.css'; 
import {BrowserRouter} from 'react-router-dom'
import configStore from './store'
import { Provider } from 'react-redux'
import { login } from './store/actions/user'

const store = configStore()
console.log(store.dispatch(login))
store.dispatch(login)
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
