import React from 'react';
import './styles.scss';

// const stringDrop = ['equals', 'contains', 'starts with', 'in list'];
// const integerDrop = ['equals', 'between', 'greater than', 'less than', 'in list'];

export default function DropDown() {
    return (
        <select>
            <option value='0'>Select Option:</option>
            <option value='User Email'>User Email</option>
            <option value='Screen Width'>Screen Width</option>
            <option value='Screen Height'>Screen Height</option>
            <option value='# of Visits'># of Visits</option>
            <option value='First Name'>First Name</option>
            <option value='Last Name'>Last Name</option>
            <option value='Page Response time (ms)'>Page Response time (ms)</option>
            <option value='Domain'>Domain</option>
            <option value='Page Path'>Page Path</option>
            {/* Strings */}
            <option value='equals'>equals</option>
            <option value='contains'>contains</option>
            <option value='starts with'>starts with</option>
            <option value='in list'>in list</option>
            {/* Integers */}
            <option value='equals'>equals</option>
            <option value='between'>between</option>
            <option value='greater than'>greater than</option>
            <option value='less than'>less than</option>
            <option value='in list'>in list</option>
        </select>
    );
}
