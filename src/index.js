import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Components/Form/Form';
import Conditional from './Components/Conditional/Conditional';
import './styles/global.scss';

ReactDOM.render(
    <React.StrictMode>
        <>
            <Conditional />
            <h1>Search for Session</h1>
            <Form />
        </>
    </React.StrictMode>,
    document.getElementById('root')
);
