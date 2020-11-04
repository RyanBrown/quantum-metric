import React from 'react';
import ReactDOM from 'react-dom';
import FilterBlock from './Components/FilterBlock/FilterBlock';

import './styles/global.scss';

ReactDOM.render(
    <React.StrictMode>
        <>
            <h1>Search for Session</h1>
            <FilterBlock />
        </>
    </React.StrictMode>,
    document.getElementById('root')
);
