import React, { Component } from 'react';
// import Form from './Components/Form/Form';
import FilterBlock from './Components/FilterBlock/FilterBlock';
import Button from './Components/Button/Button';
import './styles/global.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterBlock: [{ value: 'row1' }],
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
                <h1>Search for Session</h1>
                {/* <Form /> */}
                {this.state.filterBlock.map((row, index) => {
                    return (
                        <FilterBlock key={index} value={row.value} onChange={(e) => this.updateValue(e, index)}>
                            <Button onClick={this.deleteFilterBlock} variant='close'>
                                &times;
                            </Button>
                        </FilterBlock>
                    );
                })}
                <Button onClick={this.addFilterBlock} variant='primary'>
                    And
                </Button>
            </>
        );
    }
}
export default App;
