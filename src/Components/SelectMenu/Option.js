import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    value: PropTypes.string.isRequired,
};

const Option = (props) => {
    return <option value={props.value}>{props.children}</option>;
};

Option.displayName = 'Option';
Option.propTypes = propTypes;

export default Option;
