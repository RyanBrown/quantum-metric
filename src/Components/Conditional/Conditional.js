import React, { useState } from 'react';
import Button from '../Button/Button';
import FilterBlock from '../FilterBlock/FilterBlock';
import Marker from '../Marker/Marker';
import SelectMenu from '../SelectMenu/SelectMenu';
import TextInput from '../TextInput/TextInput';
import './styles.scss';

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
    const { value: id, bind: bindId, reset: resetId } = useInput('');
    const { value: userEmail, bind: bindUserEmail, reset: resetUserEmail } = useInput('');
    const { value: userFirstName, bind: bindUserFirstName, reset: resetUserFirstName } = useInput('');
    const { value: userLastName, bind: bindUserLastName, reset: resetUserLastName } = useInput('');
    const { value: screenWidthMin, bind: bindScreenWidthMin, reset: resetScreenWidthMin } = useInput('');
    const { value: screenWidthMax, bind: bindScreenWidthMax, reset: resetScreenWidthMax } = useInput('');
    const { value: screenHeightMin, bind: bindScreenHeightMin, reset: resetScreenHeightMin } = useInput('');
    const { value: screenHeightMax, bind: bindScreenHeightMax, reset: resetScreenHeightMax } = useInput('');
    const { value: visits, bind: bindVisits, reset: resetVisits } = useInput('');
    const { value: pageResponse, bind: bindPageResponse, reset: resetPageResponse } = useInput('');
    const { value: domain, bind: bindDomain, reset: resetDomain } = useInput('');
    const { value: path, bind: bindPath, reset: resetPath } = useInput('');
    const { value: predicatedOptions, bind: bindPredicatedOptions, reset: resetPredicatedOptions } = useInput('');
    const { value: stringOptions, bind: bindStringOptions, reset: resetStringOptions } = useInput('');
    const { value: integerOptions, bind: bindIntegerOptions, reset: resetIntegerOptions } = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        resetId();
        resetUserEmail();
        resetUserFirstName();
        resetUserLastName();
        resetScreenWidthMin();
        resetScreenWidthMax();
        resetScreenHeightMin();
        resetScreenHeightMax();
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
        resetScreenWidthMin();
        resetScreenWidthMax();
        resetScreenHeightMin();
        resetScreenHeightMax();
        resetVisits();
        resetPageResponse();
        resetDomain();
        resetPath();
        resetPredicatedOptions();
        resetStringOptions();
        resetIntegerOptions();
    };

    const predicatedMenu = (
        <SelectMenu {...bindPredicatedOptions}>
            <option value='id'>id</option>
            <option value='userEmail'>User Email</option>
            <option value='userFirstName'>First Name</option>
            <option value='userLastName'>Last Name</option>
            <option value='screenWidth'>Screen Width</option>
            <option value='screenHeight'>Screen Height</option>
            <option value='visits'># of Visits</option>
            <option value='pageResponse'>Page Response time (ms)</option>
            <option value='domain'>Domain</option>
            <option value='path'>Page Path</option>
        </SelectMenu>
    );

    const integerMenu = (
        <SelectMenu {...bindIntegerOptions}>
            <option value='='>equals</option>
            <option value='BETWEEN'>between</option>
            <option value='>'>greater than</option>
            <option value='<'>less than</option>
            <option value='IN'>in list</option>
        </SelectMenu>
    );
    const stringMenu = (
        <SelectMenu {...bindStringOptions}>
            <option value='='>equals</option>
            <option value='CONTAINS'>contains</option>
            <option value='%STARTSWITH'>starts with</option>
            <option value='IN'>in list</option>
        </SelectMenu>
    );

    const isMarker = <Marker variant='is' />;
    const andMarker = <Marker variant='and' />;

    const inputId = <TextInput type='text' {...bindId} placeholder='id' />;
    const inputEmail = <TextInput type='email' {...bindUserEmail} placeholder='Email' />;
    const inputFirstName = <TextInput type='text' {...bindUserFirstName} placeholder='First Name' />;
    const inputLastName = <TextInput type='text' {...bindUserLastName} placeholder='Last Name' />;
    const inputScreenWidthMin = <TextInput type='number' {...bindScreenWidthMin} placeholder='Screen Width' />;
    const inputScreenWidthMax = <TextInput type='number' {...bindScreenWidthMax} placeholder='Screen Width' />;
    const inputScreenHeightMin = <TextInput type='number' {...bindScreenHeightMin} placeholder='Screen Height' />;
    const inputScreenHeightMax = <TextInput type='number' {...bindScreenHeightMax} placeholder='Screen Height' />;
    const inputVisits = <TextInput type='text' {...bindVisits} placeholder='Visits' />;
    const inputPageResponse = <TextInput type='text' {...bindPageResponse} placeholder='Page Response' />;
    const inputDomain = <TextInput type='url' {...bindDomain} placeholder='Domain' />;
    const inputPath = <TextInput type='text' {...bindPath} placeholder='Path' />;

    let selectedArea;
    if (predicatedOptions === 'id') {
        selectedArea = <>{inputId}</>;
    } else if (predicatedOptions === 'userEmail') {
        selectedArea = <>{inputEmail}</>;
    } else if (predicatedOptions === 'screenWidth') {
        selectedArea = (
            <>
                {isMarker}
                {integerMenu}
                {inputScreenWidthMin}
                {andMarker}
                {inputScreenWidthMax}
            </>
        );
    } else if (predicatedOptions === 'screenHeight') {
        selectedArea = (
            <>
                {isMarker}
                {integerMenu}
                {inputScreenHeightMin}
                {andMarker}
                {inputScreenHeightMax}
            </>
        );
    } else if (predicatedOptions === 'visits') {
        selectedArea = <>{inputVisits}</>;
    } else if (predicatedOptions === 'userFirstName') {
        selectedArea = <>{inputFirstName}</>;
    } else if (predicatedOptions === 'userLastName') {
        selectedArea = <>{inputLastName}</>;
    } else if (predicatedOptions === 'pageResponse') {
        selectedArea = <>{inputPageResponse}</>;
    } else if (predicatedOptions === 'domain') {
        selectedArea = (
            <>
                {stringMenu}
                {inputDomain}
            </>
        );
    } else if (predicatedOptions === 'pagePath') {
        selectedArea = <>{inputPath}</>;
    } else {
        selectedArea = null;
    }

    return (
        <>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <FilterBlock>
                    {predicatedMenu}
                    {selectedArea}
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
                        {predicatedOptions}
                        <br />
                        <br />
                        <br />
                        <br />
                        SELECT
                        {id}, {userEmail}, {userFirstName}, {userLastName}, {screenWidthMin}, {screenWidthMax},{' '}
                        {screenHeightMin}, {screenHeightMax} {visits},{pageResponse}, {domain}, {path},{' '}
                        {predicatedOptions}, {stringOptions}, {integerOptions} FROM session;
                        <br />
                        <br />
                        <br />
                        Screen Height is {screenHeightMin} {integerOptions} AND {screenHeightMax}
                    </code>
                </pre>
            </div>
        </>
    );
}
