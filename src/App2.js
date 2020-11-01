import React, { useState } from 'react';
import Button from './Components/Button/Button';
import './styles/global.scss';

const FilterBlock = (props) => {
    return <div className='filter-block'>{props.children}</div>;
};

export default function App(props) {
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
                    <FilterBlock key={index}>
                        <Button key={index} id={index} onClick={() => removeItems(index)}>
                            Close
                        </Button>
                        {props.children}
                    </FilterBlock>
                );
            })}
            <Button variant='primary' onClick={addItems}>
                And
            </Button>
        </>
    );
}
