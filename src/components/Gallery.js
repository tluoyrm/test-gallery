/**
 * Created by Angelika on 09.06.2017.
 */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as GalleryActions from '../actions';

export class Gallery extends Component {
    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        const {images, selectImage, selectedImage} = this.props;
        return (
            <div>
                <div className="image-gallery">
                    <div className="gallery-image">
                        <div>
                            <img src={selectedImage} />
                        </div>
                    </div>
                    <div className="image-scroller">
                        {images.map((image, index) => (
                            <div key={index} onClick={() => selectImage(image)}>
                                <img src={image}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({images: state.images, selectedImage: state.selectedImage}),  // mapped the store’s state to props that are passed to the Gallery
    dispatch => bindActionCreators(GalleryActions, dispatch)    // mapped an action creator function
)(Gallery)

