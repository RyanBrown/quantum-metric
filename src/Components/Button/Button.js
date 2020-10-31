import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    id: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset', null]),
    variant: PropTypes.PropTypes.oneOf(['primary', 'secondary', 'close']).isRequired,
};

const defaultProps = {
    type: 'button',
    variant: 'secondary',
};

const Button = (props) => {
    return (
        <button id={props.id} type={props.type} className={[`${props.variant}`]} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

Button.displayName = 'Button';
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
