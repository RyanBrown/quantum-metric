import React, { Component } from 'react';
import ActionBar from '../ActionBar/ActionBar';
import Button from '../Button/Button';
import Generated from '../Generated/Generated';
import Marker from '../Marker/Marker';
import SelectMenu from '../SelectMenu/SelectMenu';
import TextInput from '../TextInput/TextInput';

import './styles.scss';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            user_email: '',
            user_first_name: '',
            user_last_name: '',
            screen_width: '',
            screen_height: '',
            visits: '',
            page_response: '',
            domain: '',
            path: '',
            selectOption: '',
            stringOptions: '',
            integerOptions: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <>
                <form className='form' onSubmit={this.handleSubmit}>
                    <div className='filter-block'>
                        <TextInput
                            name='id'
                            onChange={this.handleChange}
                            placeholder='id'
                            type='text'
                            value={this.state.id}
                        />
                        <Marker variant='is' />
                        <TextInput
                            name='user_email'
                            onChange={this.handleChange}
                            placeholder='Email Address'
                            type='email'
                            value={this.state.user_email}
                        />
                        <TextInput
                            name='user_first_name'
                            onChange={this.handleChange}
                            placeholder='First Name'
                            type='text'
                            value={this.state.user_first_name}
                        />
                    </div>
                    <div className='filter-block'>
                        <TextInput
                            name='user_last_name'
                            onChange={this.handleChange}
                            placeholder='Last Name'
                            type='text'
                            value={this.state.user_last_name}
                        />
                        <TextInput
                            name='screen_width'
                            onChange={this.handleChange}
                            placeholder='Screen Width'
                            type='text'
                            value={this.state.screen_width}
                        />
                        <TextInput
                            name='screen_height'
                            onChange={this.handleChange}
                            placeholder='Screen Height'
                            type='text'
                            value={this.state.screen_height}
                        />
                    </div>
                    <div className='filter-block'>
                        <TextInput
                            name='visits'
                            onChange={this.handleChange}
                            placeholder='Visits'
                            type='text'
                            value={this.state.visits}
                        />
                        <TextInput
                            name='page_response'
                            onChange={this.handleChange}
                            placeholder='Page Response'
                            type='text'
                            value={this.state.page_response}
                        />
                        <TextInput
                            name='domain'
                            onChange={this.handleChange}
                            placeholder='Domain'
                            type='text'
                            value={this.state.domain}
                        />
                    </div>
                    <div className='filter-block'>
                        <TextInput
                            name='path'
                            onChange={this.handleChange}
                            placeholder='Path'
                            type='text'
                            value={this.state.path}
                        />

                        <SelectMenu value={this.state.stringOptions} name='stringOptions' onChange={this.handleChange}>
                            <option value='0'>Strings</option>
                            <option value='='>equals</option>
                            <option value='CONTAINS'>contains</option>
                            <option value='%STARTSWITH'>starts with</option>
                            <option value='IN'>in list</option>
                        </SelectMenu>

                        <SelectMenu
                            value={this.state.integerOptions}
                            name='integerOptions'
                            onChange={this.handleChange}
                        >
                            <option value='0'>Integers</option>
                            <option value='='>equals</option>
                            <option value='BETWEEN'>between</option>
                            <option value='>'>greater than</option>
                            <option value='<'>less than</option>
                            <option value='IN'>in list</option>
                        </SelectMenu>

                        <SelectMenu value={this.state.selectOption} name='selectOption' onChange={this.handleChange}>
                            {/* Predicated field options */}
                            <option value='0'>Select Option:</option>
                            <option value='User Email'>User Email</option>
                            <option value='Screen Width'>Screen Width</option>
                            <option value='Screen Height'>Screen Height</option>
                            <option value='# of Visits'># of Visits</option>
                            <option value='First Name'>First Name</option>
                            <option value='Last Name'>Last Name</option>
                            <option value='Page Response time (ms)'>Page Response time (ms)</option>
                            <option value='Domain'>Domain</option>
                            <option value='Page Path'>Page Path</option>
                        </SelectMenu>
                    </div>

                    <ActionBar>
                        <Button type='submit' value='Submit' variant='primary'>
                            Search
                        </Button>
                        <Button type='reset' value='reset'>
                            Reset
                        </Button>
                    </ActionBar>
                </form>
                <Generated>
                    {/* SELECT studentID, FirstName, LastName, FirstName + ' ' + LastName AS FullName FROM session; */}
                    SELECT {this.state.id}, {this.state.user_email}, {this.state.user_first_name},{' '}
                    {this.state.user_last_name}, {this.state.screen_width}, {this.state.screen_height},{' '}
                    {this.state.visits}, {this.state.page_response}, {this.state.domain}, {this.state.path}
                    FROM session;
                    <br />
                    Choice in selectOption:
                    {this.state.selectOption}
                    <br />
                    Strings:
                    {this.state.stringOptions}
                    <br />
                    Integers:
                    {this.state.integerOptions}
                </Generated>
            </>
        );
    }
}

export default Form;
