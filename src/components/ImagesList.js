/**
 * Created by Angelika on 09.06.2017.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as GalleryActions from '../actions';

export class ImagesList extends Component {
    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        const {images, selectImage, selectedImage} = this.props;
        return (
            <div>
                <div className="image-list">
                    {images.map((photo, index) => (
                        <div className="list-item" key={photo.id}>
                            <div className="thumb">
                                <img src={photo.url} />
                            </div>
                            <div className="info">
                                <div>
                                    {photo.name}
                                </div>
                                <div>
                                    {photo.author}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({images: state.images, selectedImage: state.selectedImage}),  // mapped the store’s state to props that are passed to the Gallery
    dispatch => bindActionCreators(GalleryActions, dispatch)    // mapped an action creator function
)(ImagesList)