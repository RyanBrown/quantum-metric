import React from 'react';
import ReactDOM from 'react-dom';
// import Form from './Components/Form/Form';
import Form2 from './Components/Form2/Form2';
import './styles/global.scss';

ReactDOM.render(
    <React.StrictMode>
        <>
            <h1>Search for Session</h1>
            {/* <Form /> */}
            <Form2 />
        </>
    </React.StrictMode>,
    document.getElementById('root')
);
