/**
 * Created by Angelika on 24.06.2017.
 */

import React, {Component} from 'react';

export default class Button extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button type="button" className="btn btn-info" onClick={this.props.open}>Open Modal</button>
        );
    }
}