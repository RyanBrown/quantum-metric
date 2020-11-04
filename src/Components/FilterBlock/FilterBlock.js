import React, { useState } from 'react';
import Conditional from '../Conditional/Conditional';
import Button from '../Button/Button';
import useInput from '../Hooks/useInputHook';
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

    const { value: id, bind: bindId, reset: resetId } = useInput('');
    const { value: userEmail, bind: bindUserEmail, reset: resetUserEmail } = useInput('');
    const { value: userFirstName, bind: bindUserFirstName, reset: resetUserFirstName } = useInput('');
    const { value: userLastName, bind: bindUserLastName, reset: resetUserLastName } = useInput('');
    const { value: screenWidthMin, bind: bindScreenWidthMin, reset: resetScreenWidthMin } = useInput('');
    const { value: screenWidthMax, bind: bindScreenWidthMax, reset: resetScreenWidthMax } = useInput('');
    const { value: screenHeightMin, bind: bindScreenHeightMin, reset: resetScreenHeightMin } = useInput('');
    const { value: screenHeightMax, bind: bindScreenHeightMax, reset: resetScreenHeightMax } = useInput('');
    const { value: visits, bind: bindVisits, reset: resetVisits } = useInput('');
    const { value: pageResponse, bind: bindPageResponse, reset: resetPageResponse } = useInput('');
    const { value: domain, bind: bindDomain, reset: resetDomain } = useInput('');
    const { value: path, bind: bindPath, reset: resetPath } = useInput('');
    const { value: predicatedOptions, bind: bindPredicatedOptions, reset: resetPredicatedOptions } = useInput('');
    const { value: stringOptions, bind: bindStringOptions, reset: resetStringOptions } = useInput('');
    const { value: integerOptions, bind: bindIntegerOptions, reset: resetIntegerOptions } = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        resetId();
        resetUserEmail();
        resetUserFirstName();
        resetUserLastName();
        resetScreenWidthMin();
        resetScreenWidthMax();
        resetScreenHeightMin();
        resetScreenHeightMax();
        resetVisits();
        resetPageResponse();
        resetDomain();
        resetPath();
        resetPredicatedOptions();
        resetStringOptions();
        resetIntegerOptions();
        console.log('Submit Clicked');
    };

    const handleReset = (e) => {
        e.preventDefault();
        resetId();
        resetUserEmail();
        resetUserFirstName();
        resetUserLastName();
        resetScreenWidthMin();
        resetScreenWidthMax();
        resetScreenHeightMin();
        resetScreenHeightMax();
        resetVisits();
        resetPageResponse();
        resetDomain();
        resetPath();
        resetPredicatedOptions();
        resetStringOptions();
        resetIntegerOptions();
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

            {predicatedOptions}

            <div className='generated-sql'></div>
        </form>
    );
}
