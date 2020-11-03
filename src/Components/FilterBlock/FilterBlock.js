import React, { useState } from 'react';
import Button from '../Button/Button';
import './styles.scss';

// Set up form block wrappers
const RowBlock = (props) => {
    return <div className='filter-block'>{props.children}</div>;
};

// Add/Remove blocks for form inputs
export default function FilterBlock(props) {
    const [filterBlocks, setBlock] = useState([0]);
    const [block, setNewBlock] = useState('');

    const addItems = () => {
        setBlock((filterBlockList) => {
            return [...filterBlockList, block];
        });
        setNewBlock('');
    };

    const removeItems = (id) => {
        setBlock((filterBlockList) => {
            return filterBlockList.filter((arrElem, index) => {
                return index !== (id || id !== [0]);
            });
        });
    };

    return (
        <>
            {/* Add Additional Form Blocks */}
            {filterBlocks.map((block, index) => {
                return (
                    <RowBlock key={index}>
                        <Button key={index} id={index} onClick={() => removeItems(index)} variant='close'>
                            &times;
                        </Button>
                        {props.children}
                    </RowBlock>
                );
            })}
            <Button variant='primary' onClick={addItems}>
                And
            </Button>
        </>
    );
}
