import React from 'react';
import ActionBar from './Components/ActionBar/ActionBar';
import Button from './Components/Button/Button';
import DropDown from './Components/DropDown/DropDown';
import FilterBlock from './Components/FilterBlock/FilterBlock';
import Generated from './Components/Generated/Generated';
import Marker from './Components/Marker/Marker';
import TextInput from './Components/TextInput/TextInput';
import './styles/global.scss';

function App() {
    return (
        <>
            <h1>Search for Session</h1>

            <FilterBlock>
                <Button variant='close'></Button>
                <DropDown />
                <Marker variant='is' />
                <DropDown />
                <TextInput placeholder='website.com' type='url' />
            </FilterBlock>

            {/*<FilterBlock>
                 <Button variant='close' children='&times;' />
            <DropDown />
            <Marker variant='is' />
            <DropDown />
            <Marker variant='and' /> <TextInput />
            </FilterBlock> */}

            {/* <FilterBlock>
                <Button variant='close' children='&times;' />
            <DropDown />
            <DropDown />
            <TextInput placeholder='johndoe@email.com' type='email' /> 
            </FilterBlock>*/}

            <ActionBar />
            <Generated />
        </>
    );
}

export default App;
