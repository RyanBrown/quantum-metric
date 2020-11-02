import React, { useState } from 'react';
import Button from '../Button/Button';
import FilterBlock from '../FilterBlock/FilterBlock';
// import Marker from '../Marker/Marker';
import SelectMenu from '../SelectMenu/SelectMenu';
import TextInput from '../TextInput/TextInput';

import './styles.scss';

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

export default function Form2(props) {
    const { value: id, bind: bindId, reset: resetId } = useInput('');
    const { value: userEmail, bind: bindUserEmail, reset: resetUserEmail } = useInput('');
    const { value: userFirstName, bind: bindUserFirstName, reset: resetUserFirstName } = useInput('');
    const { value: userLastName, bind: bindUserLastName, reset: resetUserLastName } = useInput('');
    const { value: screenWidth, bind: bindScreenWidth, reset: resetScreenWidth } = useInput('');
    const { value: screenHeight, bind: bindScreenHeight, reset: resetScreenHeight } = useInput('');
    const { value: visits, bind: bindVisits, reset: resetVisits } = useInput('');
    const { value: pageResponse, bind: bindPageResponse, reset: resetPageResponse } = useInput('');
    const { value: domain, bind: bindDomain, reset: resetDomain } = useInput('');
    const { value: path, bind: bindPath, reset: resetPath } = useInput('');
    const { value: predicatedOptions, bind: bindPredicatedOptions, reset: resetPredicatedOptions } = useInput('');
    const { value: stringOptions, bind: bindStringOptions, reset: resetStringOptions } = useInput('');
    const { value: integerOptions, bind: bindIntegerOptions, reset: resetIntegerOptions } = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitting Name ${userFirstName} ${userLastName}`);
        resetId();
        resetUserEmail();
        resetUserFirstName();
        resetUserLastName();
        resetScreenWidth();
        resetScreenHeight();
        resetVisits();
        resetPageResponse();
        resetDomain();
        resetPath();
        resetPredicatedOptions();
        resetStringOptions();
        resetIntegerOptions();
    };

    const handleReset = (e) => {
        e.preventDefault();
        resetId();
        resetUserEmail();
        resetUserFirstName();
        resetUserLastName();
        resetScreenWidth();
        resetScreenHeight();
        resetVisits();
        resetPageResponse();
        resetDomain();
        resetPath();
        resetPredicatedOptions();
        resetStringOptions();
        resetIntegerOptions();
    };

    return (
        <>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <FilterBlock>
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

                    <TextInput type='text' {...bindId} placeholder='id' />
                    <TextInput type='email' {...bindUserEmail} placeholder='Email' />
                    <TextInput type='text' {...bindUserFirstName} placeholder='First Name' />
                    <TextInput type='text' {...bindUserLastName} placeholder='Last Name' />
                    <TextInput type='text' {...bindScreenWidth} placeholder='Screen Width' />
                    <TextInput type='text' {...bindScreenHeight} placeholder='Screen Height' />
                    <TextInput type='text' {...bindVisits} placeholder='Visits' />
                    <TextInput type='text' {...bindPageResponse} placeholder='Page Response' />
                    <TextInput type='url' {...bindDomain} placeholder='Domain' />
                    <TextInput type='text' {...bindPath} placeholder='Path' />

                    <SelectMenu {...bindStringOptions}>
                        <option value='0'>Strings</option>
                        <option value='='>equals</option>
                        <option value='CONTAINS'>contains</option>
                        <option value='%STARTSWITH'>starts with</option>
                        <option value='IN'>in list</option>
                    </SelectMenu>

                    <SelectMenu {...bindIntegerOptions}>
                        <option value='0'>Integers</option>
                        <option value='='>equals</option>
                        <option value='BETWEEN'>between</option>
                        <option value='>'>greater than</option>
                        <option value='<'>less than</option>
                        <option value='IN'>in list</option>
                    </SelectMenu>
                </FilterBlock>
                <div className='action-bar'>
                    <Button type='submit' variant='primary' size='lg'>
                        Search
                    </Button>
                    <Button type='reset' value='Reset' size='lg'>
                        Reset
                    </Button>
                </div>
            </form>

            <div className='generated-sql'>
                <pre>
                    <code>
                        {/* SELECT studentID, FirstName, LastName, FirstName + ' ' + LastName AS FullName FROM session; */}
                        SELECT
                        {id}, {userEmail}, {userFirstName}, {userLastName}, {screenWidth}, {screenHeight}, {visits},{' '}
                        {pageResponse}, {domain}, {path}
                        {predicatedOptions}
                        {stringOptions}
                        {integerOptions}
                        FROM session;
                    </code>
                </pre>
            </div>
        </>
    );
}
