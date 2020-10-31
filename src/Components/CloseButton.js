import styled from 'styled-components';

const ClosedButton = () => {
    return <Button>&times;</Button>;
};

export default ClosedButton;

const Button = styled.button`
    background-color: transparent;
    border-radius: 0.35rem;
    border: none;
    color: #1e2e3e;
    cursor: pointer;
    font-family: sans-serif;
    font-size: 1.5rem;
    font-weight: 100;
    line-height: 1;
    margin-right: 0.5rem;
    padding: 0 0.625rem;
    transition: all 200ms ease-in-out;

    &:hover {
        background-color: #6e819a;
        color: #fff;
    }

    &:focus {
        outline: 0 none;
    }
`;
