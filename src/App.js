import React, { Component } from 'react';
import ActionBar from './Components/ActionBar/ActionBar';
import Button from './Components/Button/Button';
import SelectMenu from './Components/SelectMenu/SelectMenu';
import Generated from './Components/Generated/Generated';
import Marker from './Components/Marker/Marker';
import TextInput from './Components/TextInput/TextInput';
import Form from './Components/Form/Form';
import './styles/global.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterBlock: [{ value: 'row1' }],

            fullname: '',
            emailaddress: '',
            password: '',
            editor: '',
            message: '',
            terms: false,
            test: '',

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
    }

    updateValue = (e, index) => {
        const filterBlock = [...this.state.filterBlock]; // copy array because we don't want to mutate the previous one
        filterBlock[index].value = e.target.value;
        this.setState({
            filterBlock,
        });
    };

    addFilterBlock = () => {
        const filterBlock = [...this.state.filterBlock, { value: '' }];
        this.setState({
            filterBlock,
        });
    };

    deleteFilterBlock = () => {
        this.setState({
            filterBlock: this.state.filterBlock.filter((e) => e.checked),
        });
    };

    render() {
        return (
            <>
                <Form />

                {/* <h1>Search for Session</h1>

                {this.state.filterBlock.map((row, index) => {
                    return (
                        <div
                            className='filter-block'
                            key={index}
                            value={row.value}
                            onChange={(e) => this.updateValue(e, index)}
                        >
                            <Button onClick={this.deleteFilterBlock} variant='close'>
                                &times;
                            </Button>
                            <TextInput />
                            <Marker variant='is' />
                            <SelectMenu />
                        </div>
                    );
                })}
                <Button onClick={this.addFilterBlock} variant='primary'>
                    And
                </Button>

                <ActionBar />
                <Generated /> */}
            </>
        );
    }
}
export default App;
