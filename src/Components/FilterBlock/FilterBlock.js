import React from 'react';
import Button from '../Button/Button';
import './styles.scss';

const FilterBlock = (props) => {
    return (
        <div className='filter-block'>
            <Button variant='close'>&times;</Button>
            {props.children}
        </div>
    );
};

export default FilterBlock;
