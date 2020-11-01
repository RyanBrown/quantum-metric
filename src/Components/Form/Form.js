import React, { Component } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import Generated from '../Generated/Generated';
import SelectMenu from '../SelectMenu/SelectMenu';
import './styles.scss';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            user_email: '',
            password: '',
            editor: '',
            message: '',
            // terms: false,
            // test: '',
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
                            name='fullname'
                            onChange={this.handleChange}
                            placeholder='name'
                            type='text'
                            value={this.state.fullname}
                        />

                        <TextInput
                            name='user_email'
                            onChange={this.handleChange}
                            placeholder='Email Address'
                            type='email'
                            value={this.state.user_email}
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

                    <Button type='submit' value='Submit' variant='primary'>
                        Search
                    </Button>
                    <Button type='reset' value='reset'>
                        Reset
                    </Button>
                </form>
                <Generated>
                    <p>Full Name: {this.state.fullname}</p>
                    <p>Email Address: {this.state.user_email}</p>
                    <p>Password: {this.state.password}</p>
                    <p>Choice in Editor: {this.state.editor}</p>
                    {/* <p>Why React: {this.state.message}</p> */}
                    {/* <p>Terms and Condition: {this.state.terms}</p> */}
                    {/* <p>Do you test?: {this.state.test}</p> */}
                </Generated>
            </>
        );
    }
}

export default Form;
