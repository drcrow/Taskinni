import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
//import { Dashboard } from './components/Dashboard';
import { Main } from './components/Main';

ReactDOM.render(
    <Main/>,
    document.getElementById("app")
);