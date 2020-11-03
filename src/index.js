import React from 'react';
import ReactDOM from 'react-dom';
// import Conditional from './Components/Conditional/Conditional';
import Form from './Components/Form/Form';
import './styles/global.scss';

ReactDOM.render(
    <React.StrictMode>
        <>
            <h1>Search for Session</h1>
            <Form />
            {/* <Conditional /> */}
        </>
    </React.StrictMode>,
    document.getElementById('root')
);
