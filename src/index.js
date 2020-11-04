import React from 'react';
import ReactDOM from 'react-dom';
// import Conditional2 from './Components/Conditional2/Conditional2';
import MyForm from './Components/MyForm/MyForm';
import Form from './Components/Form/Form';
import './styles/global.scss';

ReactDOM.render(
    <React.StrictMode>
        <>
            <h1>Search for Session</h1>
            <Form />

            <h1>Search for Session</h1>
            <MyForm />

            {/* <Conditional2 /> */}
        </>
    </React.StrictMode>,
    document.getElementById('root')
);
