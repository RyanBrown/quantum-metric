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
            password: '',
            editor: '',

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
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
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
                        <TextInput
                            name='path'
                            onChange={this.handleChange}
                            placeholder='Path'
                            type='text'
                            value={this.state.path}
                        />
                        <TextInput
                            name='password'
                            onChange={this.handleChange}
                            placeholder='Password'
                            type='password'
                            value={this.state.password}
                        />

                        <SelectMenu>
                            <option>Test</option>
                        </SelectMenu>

                        {/* <label className='label'>Pick your editor</label> */}
                        <div className='select'>
                            <select value={this.state.editor} name='editor' onChange={this.handleChange}>
                                {/* <Option>Test</Option> */}
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
                                {/* Strings */}
                                <option value='equals'>equals</option>
                                <option value='contains'>contains</option>
                                <option value='starts with'>starts with</option>
                                <option value='in list'>in list</option>
                                {/* Integers */}
                                <option value='equals'>equals</option>
                                <option value='between'>between</option>
                                <option value='greater than'>greater than</option>
                                <option value='less than'>less than</option>
                                <option value='in list'>in list</option>
                                {/* Default */}
                                <option value='vscode'>VsCode</option>
                                <option value='atom'>Atom</option>
                            </select>
                        </div>
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
                    SELECT id, user_email, user_first_name, user_last_name, screen_width, screen_height, visits,
                    page_response, domain, path FROM session;
                    <br />
                    Password: {this.state.password}
                    <br />
                    Choice in Editor: {this.state.editor}
                    <br />
                    <br />
                    id: {this.state.id}
                    <br />
                    user_email: {this.state.user_email}
                    <br />
                    user_first_name: {this.state.user_first_name}
                    <br />
                    user_last_name: {this.state.user_last_name}
                    <br />
                    screen_width: {this.state.screen_width}
                    <br />
                    screen_height: {this.state.screen_height}
                    <br />
                    visits: {this.state.visits}
                    <br />
                    page_response: {this.state.page_response}
                    <br />
                    domain: {this.state.domain}
                    <br />
                    path: {this.state.path}
                </Generated>
            </>
        );
    }
}

export default Form;
