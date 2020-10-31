import React from 'react';
import ReactDOM from 'react-dom';
import FilterBlock from './Components/FilterBlock';
import ActionBar from './Components/ActionBar/ActionBar';
import Generated from './Components/Generated/Generated';
import './styles/global.scss';

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
