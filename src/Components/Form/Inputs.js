import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './styles.scss';

const Inputs = ({ idx, catState, handleCatChange }) => {
    const catId = `name-${idx}`;
    const ageId = `age-${idx}`;
    return (
        <div key={`cat-${idx}`} className='filter-block'>
            {/* <Button key={idx} onClick={() => removeItems(idx)} type='reset' variant='close'> */}
            <Button key={idx} type='reset' variant='close'>
                &times;
            </Button>

            <label htmlFor={catId}>{`Cat #${idx + 1}`}</label>
            <input
                type='text'
                name={catId}
                data-idx={idx}
                id={catId}
                className='name'
                value={catState[idx].name}
                onChange={handleCatChange}
            />
            <label htmlFor={ageId}>Age</label>
            <input
                type='text'
                name={ageId}
                data-idx={idx}
                id={ageId}
                className='age'
                value={catState[idx].age}
                onChange={handleCatChange}
            />
        </div>
    );
};

Inputs.propTypes = {
    idx: PropTypes.number,
    catState: PropTypes.array,
    handleCatChange: PropTypes.func,
};

export default Inputs;
