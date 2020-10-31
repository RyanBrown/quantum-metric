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

const ActionBar = () => {
    return (
        <>
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
