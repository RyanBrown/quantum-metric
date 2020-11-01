import React from 'react';
import './styles.scss';

const ActionBar = (props) => {
    return <div className='action-bar'>{props.children}</div>;
};

export default ActionBar;
