import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import './styles.scss';

const propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    id: PropTypes.string,
    onClick: PropTypes.func,
};

// const defaultProps = {
// size: 'sm',
// type: 'button',
// variant: 'secondary',
// };

// const stringDrop = ['equals', 'contains', 'starts with', 'in list'];
// const integerDrop = ['equals', 'between', 'greater than', 'less than', 'in list'];

const SelectMenu = (props) => {
    return (
        <select>
            {props.children}

            {/* <option value='0'>Select Option:</option>
            <option value='User Email'>User Email</option>
            <option value='Screen Width'>Screen Width</option>
            <option value='Screen Height'>Screen Height</option>
            <option value='# of Visits'># of Visits</option>
            <option value='First Name'>First Name</option>
            <option value='Last Name'>Last Name</option>
            <option value='Page Response time (ms)'>Page Response time (ms)</option>
            <option value='Domain'>Domain</option>
            <option value='Page Path'>Page Path</option>

            <option value='equals'>equals</option>
            <option value='contains'>contains</option>
            <option value='starts with'>starts with</option>
            <option value='in list'>in list</option>
            
            <option value='equals'>equals</option>
            <option value='between'>between</option>
            <option value='greater than'>greater than</option>
            <option value='less than'>less than</option>
            <option value='in list'>in list</option> */}
        </select>
    );
};

SelectMenu.displayName = 'SelectMenu';
SelectMenu.propTypes = propTypes;
// SelectMenu.defaultProps = defaultProps;

SelectMenu.Option = Option;

export default SelectMenu;
