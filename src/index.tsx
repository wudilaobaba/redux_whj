import React from 'react';
import {createRoot} from 'react-dom/client'
import Home from './page/Home'
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {store} from './store'
import Mask from "./page/Mask";

const container = document.getElementById('root');
const root = createRoot(container!)
root.render(
  <Provider store={store}>
    <Home/>
    <Mask/>
  </Provider>
);

reportWebVitals();
