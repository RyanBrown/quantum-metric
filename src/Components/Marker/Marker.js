import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const propTypes = {
    id: PropTypes.string,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(['is', 'and']).isRequired,
};

const defaultProps = {
    variant: 'is',
};

const Marker = (props) => {
    return (
        <div id={props.id} type={props.type} className='marker'>
            {props.variant}
        </div>
    );
};

Marker.displayName = 'Marker';
Marker.propTypes = propTypes;
Marker.defaultProps = defaultProps;

export default Marker;
