import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text', 'email', 'url', 'number', 'hidden']),
    value: PropTypes.string,
};

const defaultProps = {
    placeholder: 'enter text',
    type: 'text',
};

const TextInput = (props) => {
    return (
        <input
            id={props.id}
            name={props.name}
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            onClick={props.onClick}
        />
    );
};

TextInput.displayName = 'TextInput';
TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
