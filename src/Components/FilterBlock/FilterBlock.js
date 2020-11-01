import React, { useState } from 'react';
import Button from '../Button/Button';
import './styles.scss';

const RowBlock = (props) => {
    return <div className='filter-block'>{props.children}</div>;
};

export default function FilterBlock(props) {
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
