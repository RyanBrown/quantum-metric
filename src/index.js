import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Button from './Components/Button/Button';
import FilterBlock from './Components/FilterBlock/FilterBlock';
import ActionBar from './Components/ActionBar/ActionBar';
import Generated from './Components/Generated/Generated';

ReactDOM.render(
    <React.StrictMode>
        <h1>Search for Session</h1>
        <FilterBlock />
        <Button primary>And</Button>
        <FilterBlock />
        <Button primary>And</Button>
        <FilterBlock />
        <Button primary>And</Button>
        <ActionBar />
        <Generated />
    </React.StrictMode>,
    document.getElementById('root')
);
