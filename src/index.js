import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Button from './Components/Button';
import FilterBlock from './Components/FilterBlock';
import ActionBar from './Components/ActionBar';
import Generated from './Components/Generated';

ReactDOM.render(
    <React.StrictMode>
        <h1>Search for Session</h1>
        <FilterBlock />
        <FilterBlock />
        <FilterBlock />
        <ActionBar />
        <Generated />
    </React.StrictMode>,
    document.getElementById('root')
);
