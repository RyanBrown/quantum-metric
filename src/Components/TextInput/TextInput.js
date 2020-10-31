import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const propTypes = {
    id: PropTypes.string,
    onClick: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text', 'email', 'url', 'hidden']),
};

const defaultProps = {
    placeholder: 'enter text',
    type: 'text',
};

const TextInput = (props) => {
    return <input id={props.id} type={props.type} placeholder={props.placeholder} onClick={props.onClick} />;
};

TextInput.displayName = 'TextInput';
TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
