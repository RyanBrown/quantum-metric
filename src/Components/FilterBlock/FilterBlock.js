import React, { useState } from 'react';
import Button from '../Button/Button';
import './styles.scss';

// Set up form block wrappers
const RowBlock = (props) => {
    return <div className='filter-block'>{props.children}</div>;
};

// Add/Remove blocks for form inputs
export default function FilterBlock(props) {
    // const [filterBlocks, setBlock] = useState([0]);
    const [filterBlocks, setBlock] = useState([]);
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
                return index !== id;
            });
        });
    };

    return (
        <>
            {/* Initial Form Block - update this with state */}
            <RowBlock>
                <Button variant='close'>&times;</Button>
                {props.children}
            </RowBlock>

            {/* Add Aditional Form Blocks */}
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
