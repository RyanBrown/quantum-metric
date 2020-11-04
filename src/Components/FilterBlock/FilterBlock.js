import React, { useState } from 'react';
import Conditional from '../Conditional/Conditional';
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit Clicked');
    };

    const handleReset = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} onReset={handleReset}>
            {/* Add Additional Form Blocks */}
            {filterBlocks.map((block, index) => {
                return (
                    <RowBlock key={index}>
                        <Button key={index} id={index} onClick={() => removeItems(index)} type='reset' variant='close'>
                            &times;
                        </Button>

                        <Conditional />
                    </RowBlock>
                );
            })}
            <Button variant='primary' onClick={addItems}>
                And
            </Button>

            <div className='action-bar'>
                <Button type='submit' variant='primary' size='lg'>
                    Search
                </Button>
                <Button type='reset' value='Reset' size='lg'>
                    Reset
                </Button>
            </div>
        </form>
    );
}
