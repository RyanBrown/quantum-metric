import React from 'react';
import './styles.scss';

// const stringDrop = ['equals', 'contains', 'starts with', 'in list'];
// const integerDrop = ['equals', 'between', 'greater than', 'less than', 'in list'];

export default function DropDown() {
    return (
        <select>
            <option value='0'>Select Option:</option>
            <option value='1'>User Email</option>
            <option value='2'>Screen Width</option>
            <option value='3'>Screen Height</option>
            <option value='4'># of Visits</option>
            <option value='5'>First Name</option>
            <option value='6'>Last Name</option>
            <option value='7'>Page Response time (ms)</option>
            <option value='8'>Domain</option>
            <option value='9'>Page Path</option>
            {/* Strings */}
            <option value=''>equals</option>
            <option value=''>contains</option>
            <option value=''>starts with</option>
            <option value=''>in list</option>
            {/* Integers */}
            <option value=''>equals</option>
            <option value=''>between</option>
            <option value=''>greater than</option>
            <option value=''>less than</option>
            <option value=''>in list</option>
        </select>
    );
}
