import React, { useState } from 'react';

const [optionList, setOptionList] = [];

const handleSubmit = (e) => {
    e.preventDefault();
};

const myOptions = (
    <select>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
    </select>
);

let selectedArea;
if (myOptions === 'option1') {
    selectedArea = 'Option 1';
} else if (myOptions === 'option2') {
    selectedArea = 'Option 2';
} else {
    selectedArea = 'Option 3';
}
export default function Trial() {
    return (
        <>
            <form onSubmit={handleSubmit}>
                {myOptions}
                <button type='submit' value='Submit' />
            </form>

            <div>{selectedArea}</div>
        </>
    );
}
