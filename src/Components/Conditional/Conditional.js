import React, { useState } from 'react';
import Button from '../Button/Button';
import SelectMenu from '../SelectMenu/SelectMenu';

// Set hook for inputs
export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        setValue,
        reset: () => setValue(''),
        bind: {
            value,
            onChange: (event) => {
                setValue(event.target.value);
            },
        },
    };
};

export default function Conditional() {
    const { value: predicatedOptions, bind: bindPredicatedOptions, reset: resetPredicatedOptions } = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        resetPredicatedOptions();
    };

    const handleReset = (e) => {
        e.preventDefault();
        resetPredicatedOptions();
    };

    let selectedArea;
    if (predicatedOptions === 'User Email') {
        selectedArea = 'User Email was selected';
    } else if (predicatedOptions === 'User Email') {
        selectedArea = 'test email';
    } else if (predicatedOptions === 'Screen Width') {
        selectedArea = 'test width';
    } else if (predicatedOptions === 'Screen Height') {
        selectedArea = 'test height';
    } else if (predicatedOptions === '# of Visits') {
        selectedArea = 'test visits';
    } else if (predicatedOptions === 'First Name') {
        selectedArea = 'test first';
    } else if (predicatedOptions === 'Last Name') {
        selectedArea = 'test last';
    } else if (predicatedOptions === 'Page Response time (ms)') {
        selectedArea = 'test time';
    } else if (predicatedOptions === 'Domain') {
        selectedArea = 'test domain';
    } else if (predicatedOptions === 'Page Path') {
        selectedArea = 'test path';
    } else {
        selectedArea = "It doesn't work";
    }

    return (
        <form onSubmit={handleSubmit} onReset={handleReset}>
            <SelectMenu {...bindPredicatedOptions}>
                <option value='0'>Predicated fields</option>
                <option value='User Email'>User Email</option>
                <option value='Screen Width'>Screen Width</option>
                <option value='Screen Height'>Screen Height</option>
                <option value='# of Visits'># of Visits</option>
                <option value='First Name'>First Name</option>
                <option value='Last Name'>Last Name</option>
                <option value='Page Response time (ms)'>Page Response time (ms)</option>
                <option value='Domain'>Domain</option>
                <option value='Page Path'>Page Path</option>
            </SelectMenu>

            <Button type='submit' variant='primary' size='lg'>
                Search
            </Button>
            <Button type='reset' value='Reset' size='lg'>
                Reset
            </Button>
            {predicatedOptions}

            <p>{selectedArea}</p>
        </form>
    );
}
