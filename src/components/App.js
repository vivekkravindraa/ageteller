import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newDate: '',
            birthday: '1992-06-21',
            showStats: false
        }
    }

    changeBirthday = () => {
        this.setState(() => {
            return {
                birthday: this.state.newDate,
                showStats: true
            }
        })
    }

    render() {
        return (
            <div className="App">
                <Form inline>
                    <h2>Input Your Birthday</h2>
                    <FormControl
                        type="date"
                        onChange={e => this.setState({ newDate: e.target.value })}
                    >
                    </FormControl>
                    {' '}
                    <Button onClick={() => this.changeBirthday()}>
                        Submit
                    </Button>
                </Form>
                {this.state.showStats ? <AgeStats date={this.state.birthday} /> : null}
            </div>
        )
    }
}

export default App;
