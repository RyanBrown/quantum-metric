import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
};

const SelectMenu = (props) => {
    return (
        <select id={props.id} name={props.name} onChange={props.onChange} value={props.value}>
            {props.children}
        </select>
    );
};

SelectMenu.displayName = 'SelectMenu';
SelectMenu.propTypes = propTypes;

export default SelectMenu;
