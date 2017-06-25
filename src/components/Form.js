/**
 * Created by Angelika on 24.06.2017.
 */

import React, {Component} from 'react';

export default class Form extends Component {
    render() {
        return (
            <div>
                <div className="modal fade in show" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" onClick={this.props.close}>&times;</button>
                                <h4 className="modal-title">Modal Header</h4>
                            </div>
                            <div className="modal-body">
                                <p>Some text in the modal.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" onClick={this.props.close}>Close</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="modal-backdrop fade in"></div>
            </div>
        )
    }
}