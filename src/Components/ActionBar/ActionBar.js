import React from 'react';
import Button from '../Button/Button';
import './styles.scss';

function handleClick(e) {
    e.preventDefault();
    console.log('Reset was clicked.');
}

function handleSubmit(e) {
    e.preventDefault();
    console.log('Search "submit" was clicked');
}

function handleAdd(e) {
    e.preventDefault();
    console.log('Add was clicked');
}

const ActionBar = () => {
    return (
        <>
            <Button type='reset' onClick={handleAdd} children='And' />

            <div className='action-bar'>
                <Button className='search' type='submit' variant='primary' size='lg' onClick={handleSubmit}>
                    Search
                </Button>
                <Button type='reset' size='lg' onClick={handleClick}>
                    Reset
                </Button>
            </div>
        </>
    );
};

export default ActionBar;
