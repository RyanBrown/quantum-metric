// Form.js

import React, { useState } from 'react';
import Button from '../Button/Button';
import Inputs from './Inputs';

const Form = () => {
    const [ownerState, setOwnerState] = useState({
        owner: '',
        description: '',
    });

    const handleOwnerChange = (e) =>
        setOwnerState({
            ...ownerState,
            [e.target.name]: [e.target.value],
        });

    const blankCat = { name: '', age: '' };
    const [catState, setCatState] = useState([{ ...blankCat }]);

    const addCat = () => {
        setCatState([...catState, { ...blankCat }]);
    };

    const handleCatChange = (e) => {
        const updatedCats = [...catState];
        updatedCats[e.target.dataset.idx][e.target.className] = e.target.value;
        setCatState(updatedCats);
    };

    // const handleReset = (e) => {
    //     const updatedCats = [...catState];
    //     updatedCats[e.target.dataset.idx][e.target.className] = e.target.value;
    //     setCatState(updatedCats);
    // };

    return (
        <form>
            {/* <label htmlFor='owner'>Owner</label>
            <input type='text' name='owner' id='owner' value={ownerState.owner} onChange={handleOwnerChange} />
            <label htmlFor='description'>Description</label>
            <input
                type='text'
                name='description'
                id='description'
                value={ownerState.description}
                onChange={handleOwnerChange}
            /> */}

            {catState.map((val, idx) => (
                <Inputs key={`cat-${idx}`} idx={idx} catState={catState} handleCatChange={handleCatChange} />
            ))}

            <Button variant='primary' value='Add New Cat' onClick={addCat}>
                And
            </Button>

            <div className='action-bar'>
                <Button type='submit' value='Submit' variant='primary' size='lg'>
                    Search
                </Button>
                <Button type='reset' value='Reset' size='lg'>
                    Reset
                </Button>
            </div>
        </form>
    );
};

export default Form;
