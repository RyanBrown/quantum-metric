import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

export default function ActionBar() {
    return (
        <>
            <ActionBarWrap>
                <Button id='id-button1' type='submit' primary>
                    Search
                </Button>
                <Button id='id-button2' type='reset'>
                    Reset
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
