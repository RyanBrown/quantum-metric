import React, { Component } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import Generated from '../Generated/Generated';
import './styles.scss';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            emailaddress: '',
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
                            type='text'
                            name='fullname'
                            value={this.state.fullname}
                            placeholder='name'
                            onChange={this.handleChange}
                        />

                        <TextInput
                            type='email'
                            name='emailaddress'
                            placeholder='Email Address'
                            value={this.state.emailaddress}
                            onChange={this.handleChange}
                        />

                        <TextInput
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />

                        <label className='label'>Pick your editor</label>
                        <div className='select'>
                            <select value={this.state.editor} name='editor' onChange={this.handleChange}>
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

                        {/* <textarea
                        className='textarea'
                        name='message'
                        value={this.state.message}
                        placeholder='What do you like about React'
                        onChange={this.handleChange}
                    /> */}

                        {/* <label className='checkbox'>
                        <input name='terms' type='checkbox' checked={this.state.terms} onChange={this.handleChange} />I
                        agree to the <a href='https://google.com'>terms and conditions</a>
                    </label> */}

                        {/* <div className='field'>
                        <div className='control'>
                            <label className='label'>Do you test your React code?</label>
                            <label className='radio'>
                                <input
                                    type='radio'
                                    name='test'
                                    onChange={this.handleChange}
                                    value='Yes'
                                    checked={this.state.test === 'Yes'}
                                />
                                Yes
                            </label>
                            <label className='radio'>
                                <input
                                    type='radio'
                                    name='test'
                                    onChange={this.handleChange}
                                    value='No'
                                    checked={this.state.test === 'No'}
                                />
                                No
                            </label>
                        </div>
                    </div> */}

                        {/* <input type='submit' value='Submit' className='button is-primary' /> */}
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
                    <p>Email Address: {this.state.emailaddress}</p>
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
