import React from 'react';
import ReactDOM from 'react-dom';
// import Form from './Components/Form/Form';
import Trial from './Components/Trial/Trial';
import Conditional from './Components/Conditional/Conditional';
import './styles/global.scss';

ReactDOM.render(
    <React.StrictMode>
        <>
            <h1>Search for Session</h1>
            <Conditional />
            {/* <Form /> */}
        </>
    </React.StrictMode>,
    document.getElementById('root')
);
