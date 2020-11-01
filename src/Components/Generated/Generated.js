import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

const Generated = (props) => {
    return (
        <div className='generated-sql'>
            <pre>
                <code>{props.children}</code>
            </pre>
        </div>
    );
};

Generated.displayName = 'Generated';
Generated.propTypes = propTypes;

export default Generated;
