import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    id: PropTypes.string,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(['is', 'and']).isRequired,
};

const defaultProps = {
    variant: 'is',
};

const Marker = (props) => {
    return (
        <div id={props.id} type={props.type} className='marker' variant={props.variant}>
            {props.children}
        </div>
    );
};

Marker.displayName = 'Marker';
Marker.propTypes = propTypes;
Marker.defaultProps = defaultProps;

export default Marker;
