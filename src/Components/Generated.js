import styled from 'styled-components';

const Generated = () => {
    return (
        <GeneratedSQL>
            <TextArea rows='6' placeholder='Your Generated SQL Statement goes here:' />
        </GeneratedSQL>
    );
};

export default Generated;

const GeneratedSQL = styled.div`
    background-color: #fff;
    border-radius: 0.35rem;
    border: 1px solid #aab5c4;
    display: flex;
    margin-top: 3rem;
`;

const TextArea = styled.textarea`
    background-color: transparent;
    border: none;
    font-family: 'Open Sans', sans-serif;
    padding: 1rem;
    resize: none;
    width: 100%;

    &::placeholder {
        display: block;
        height: calc(100% - 2.5rem);
        padding-top: 2.5rem;
        text-align: center;
    }

    &:focus {
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 4px rgba($blue, 0.6);
        outline: 0 none;
    }
`;
