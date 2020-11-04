import React from 'react';
import SelectMenu from '../SelectMenu/SelectMenu';
import TextInput from '../TextInput/TextInput';
import useInput from '../Hooks/useInputHook';
import './styles.scss';

// Set up form block wrappers
const Marker = (props) => {
    return <span className='marker'>{props.variant}</span>;
};

export default function Conditional() {
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

    const isMarker = <Marker variant='is' />;
    const andMarker = <Marker variant='and' />;

    const inputId = <TextInput type='text' {...bindId} placeholder='id' />;
    const inputEmail = <TextInput type='email' {...bindUserEmail} placeholder='Email' />;
    const inputFirstName = <TextInput type='text' {...bindUserFirstName} placeholder='First Name' />;
    const inputLastName = <TextInput type='text' {...bindUserLastName} placeholder='Last Name' />;
    const inputScreenWidthMin = <TextInput type='number' {...bindScreenWidthMin} placeholder='Screen Width' />;
    const inputScreenWidthMax = <TextInput type='number' {...bindScreenWidthMax} placeholder='Screen Width' />;
    const inputScreenHeightMin = <TextInput type='number' {...bindScreenHeightMin} placeholder='Screen Height' />;
    const inputScreenHeightMax = <TextInput type='number' {...bindScreenHeightMax} placeholder='Screen Height' />;
    const inputVisits = <TextInput type='text' {...bindVisits} placeholder='Visits' />;
    const inputPageResponse = <TextInput type='text' {...bindPageResponse} placeholder='Page Response' />;
    const inputDomain = <TextInput type='url' {...bindDomain} placeholder='Domain' />;
    const inputPath = <TextInput type='text' {...bindPath} placeholder='Path' />;

    const predicatedMenu = (
        <SelectMenu {...bindPredicatedOptions}>
            <option>Select Option</option>
            <option value='id'>id</option>
            <option value='userEmail'>User Email</option>
            <option value='userFirstName'>First Name</option>
            <option value='userLastName'>Last Name</option>
            <option value='screenWidth'>Screen Width</option>
            <option value='screenHeight'>Screen Height</option>
            <option value='visits'># of Visits</option>
            <option value='pageResponse'>Page Response time (ms)</option>
            <option value='domain'>Domain</option>
            <option value='path'>Page Path</option>
        </SelectMenu>
    );

    const integerMenu = (
        <SelectMenu {...bindIntegerOptions}>
            <option>Select Operator(s)</option>
            <option value='='>equals</option>
            <option value='BETWEEN'>between</option>
            <option value='>'>greater than</option>
            <option value='<'>less than</option>
            <option value='IN'>in list</option>
        </SelectMenu>
    );

    const stringMenu = (
        <SelectMenu {...bindStringOptions}>
            <option>Select Operator(s)</option>
            <option value='='>equals</option>
            <option value='CONTAINS'>contains</option>
            <option value='%STARTSWITH'>starts with</option>
            <option value='IN'>in list</option>
        </SelectMenu>
    );

    return (
        <>
            {predicatedMenu}
            {(() => {
                switch (predicatedOptions) {
                    case 'userEmail':
                        return (
                            <>
                                {stringMenu} {inputEmail}
                            </>
                        );
                    case 'screenWidth':
                        return (
                            <>
                                {isMarker} {integerMenu} {inputScreenWidthMin} {andMarker} {inputScreenWidthMax}
                            </>
                        );
                    case 'screenHeight':
                        return (
                            <>
                                {isMarker} {integerMenu} {inputScreenHeightMin} {andMarker}
                                {inputScreenHeightMax}
                            </>
                        );
                    case 'visits':
                        return (
                            <>
                                {isMarker} {integerMenu} {inputVisits} {andMarker}
                                {inputVisits}
                            </>
                        );
                    case 'userFirstName':
                        return (
                            <>
                                {stringMenu} {inputFirstName}
                            </>
                        );
                    case 'userLastName':
                        return (
                            <>
                                {stringMenu} {inputLastName}
                            </>
                        );
                    case 'pageResponse':
                        return (
                            <>
                                {isMarker} {integerMenu} {inputPageResponse} {andMarker} {inputPageResponse}
                            </>
                        );
                    case 'domain':
                        return (
                            <>
                                {stringMenu} {inputDomain}
                            </>
                        );
                    case 'pagePath':
                        return (
                            <>
                                {stringMenu} {inputPath}
                            </>
                        );
                    default:
                        return (
                            <>
                                {stringMenu} {inputId}
                            </>
                        );
                }
            })()}

            {/* <div className='generated-sql'>
                SELECT
                {predicatedOptions} {stringOptions} {integerOptions} {id} {userEmail} {userFirstName} {userLastName}{' '}
                {screenWidthMin} AND {screenWidthMax} {screenHeightMin} AND {screenHeightMax} {visits} {pageResponse}{' '}
                {domain} {path}
                FROM session;
            </div> */}
        </>
    );
}
