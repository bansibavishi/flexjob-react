import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./css/bootstrap.min.css";
import "./css/boostrap-select.min.css";
import "./css/shortcodes.css";
import "./css/style.css";
import "./css/responsive.css";
import "./css/dashboard.css";
import { Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'
import { store } from './helper/store';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);


