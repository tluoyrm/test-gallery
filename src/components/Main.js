/**
 * Created by Angelika on 24.06.2017.
 */

import React, {Component} from 'react';
import Button from './Button';
import Form from './Form';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    open() {
        console.log('open');
        this.setState({showModal: true});
    }

    close() {
        console.log('close');
        this.setState({showModal: false});
    }

    render() {
        return (
            <div className="container">
                <br /><br />
                {/*<button type="button" className="btn btn-info" onClick={this.open.bind(this)}>Open Modal</button>*/}
                <Button open={this.open.bind(this)} />
                {this.state.showModal === true
                    ? <Form close={this.close.bind(this)} />
                    : null}
            </div>
        )
    }
}
