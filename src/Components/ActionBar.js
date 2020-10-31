import React from 'react';
import styled from 'styled-components';
import Button from '../Components/Button/Button';

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

export default function ActionBar() {
    return (
        <>
            <Button type='reset' onClick={handleClick} children='And' />

            <ActionBarWrap>
                <Button type='button' variant='primary' onClick={handleSubmit}>
                    Button
                </Button>
                <Button type='reset' onClick={handleClick}>
                    Primary
                </Button>
            </ActionBarWrap>
        </>
    );
}

const ActionBarWrap = styled.div`
    border-top: 1px solid #e1e6ec;
    margin-top: 3rem;
    padding-top: 1rem;
`;
