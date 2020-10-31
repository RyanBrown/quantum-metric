import styled from 'styled-components';

export default styled.button`
    background-color: ${(props) => (props.primary ? '#4fa7ea' : '#aab5c4')};
    border-radius: 0.35rem;
    border: none;
    color: white;
    cursor: pointer;
    font-family: sans-serif;
    font-size: 1rem;
    line-height: 1;
    margin-right: 0.5rem;
    padding: 0.5rem 1.25rem;
    transition: all 200ms ease-in-out;

    &:hover {
        background-color: ${(props) => (props.primary ? '#1675bc' : '#6e819a')};
    }

    &:focus {
        outline: 0 none;
    }
`;
