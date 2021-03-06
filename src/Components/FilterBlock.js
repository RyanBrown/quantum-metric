import React from 'react';
import styled from 'styled-components';
import CloseButton from '../Components/CloseButton';
import TextInput from '../Components/TextInput';
import DropDown from '../Components/DropDown/DropDown';

export default function FilterBlock() {
    return (
        <FilterBlockWrap>
            <CloseButton type='reset' />
            <DropDown />
            <Marker>is</Marker>
            <TextInput placeholder='placeholder text' />
            <Marker>and</Marker>
            <TextInput placeholder='placeholder text' />
        </FilterBlockWrap>
    );
}

const FilterBlockWrap = styled.div`
    background-color: #fff;
    border-radius: 0.35rem;
    border: 1px solid #aab5c4;
    display: flex;
    flex-wrap: inherit;
    justify-content: space-between;
    margin: 1rem 0;
    padding: 1rem;
`;

const Marker = styled.div`
    align-items: center;
    background-color: #e1e6ec;
    border-radius: 0.3rem;
    border: 1px solid #aab5c4;
    display: flex;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    margin: 0 0.25rem;
    padding: 0.5rem 0.75rem;
`;
