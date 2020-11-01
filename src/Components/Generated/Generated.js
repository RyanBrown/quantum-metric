import React from 'react';
import './styles.scss';

const Generated = (props) => {
    return (
        <div className='generated-sql'>
            <pre>
                <code>{props.children}</code>
            </pre>
        </div>
    );
};

export default Generated;
