import styled from 'styled-components';

export default styled.input`
    border-radius: 0.3rem;
    border: 1px solid #aab5c4;
    font-size: 1rem;
    font-weight: 400;
    margin: 0 0.25rem;
    padding: 0.5rem;
    transition: all 200ms ease-in-out;
    width: 100%;

    &:focus {
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 4px rgba($blue, 0.6);
        outline: 0 none;
    }
`;
