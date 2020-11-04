import React, { useState } from 'react';
import Button from '../Button/Button';
import FormInputs from '../FormInputs/FormInputs';
import './styles.scss';

// Set up form block wrappers
const FormBlock = (props) => {
    return <div className='filter-block'>{props.children}</div>;
};

// Add/Remove blocks for form inputs
export default function MyForm(props) {
    const [filterBlocks, setBlock] = useState([0]);
    const [block, setNewBlock] = useState('');

    const addItems = () => {
        setBlock((filterBlockList) => {
            return [...filterBlockList, block];
        });
        setNewBlock('');
    };

    const removeItems = (id) => {
        setBlock((filterBlockList) => {
            return filterBlockList.filter((arrElem, index) => {
                return index !== (id || id !== [0]);
            });
        });
    };

    const selectFields = {};

    const formFields = {
        id: '',
        userEmail: '',
        userFirstName: '',
        userLastName: '',
        screenWidthMin: '',
        screenWidthMax: '',
        screenHeightMin: '',
        screenHeightMax: '',
        visits: '',
        pageResponse: '',
        domain: '',
        path: '',
        predicatedOptions: '',
        stringOptions: '',
        integerOptions: '',
    };

    // Form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit Clicked');
    };

    const handleReset = (e) => {
        e.preventDefault();
        console.log('Reset Clicked');
    };

    return (
        <>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                {filterBlocks.map((block, index) => {
                    return (
                        <FormBlock key={index}>
                            <Button
                                key={index}
                                id={index}
                                onClick={() => removeItems(index)}
                                type='reset'
                                variant='close'
                            >
                                &times;
                            </Button>
                            <FormInputs />
                        </FormBlock>
                    );
                })}
                <Button variant='primary' onClick={addItems}>
                    And
                </Button>

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
                {/* SELECT {predicatedOptions} {stringOptions} {integerOptions}
                {id}
                {userEmail}
                {userFirstName}
                {userLastName}
                {screenWidthMin} {screenWidthMax}
                {screenHeightMin} {screenHeightMax}
                {visits}
                {pageResponse}
                {domain}
                {path}
                FROM session; */}
            </div>
        </>
    );
}
