/**
 * Created by Angelika on 09.06.2017.
 */

export default function images(state = {images:[]}, action) {
    switch(action.type) {
        case 'IMAGES_LOADED':
            return {...state, images: action.images};
        case 'IMAGE_SELECTED':
            return {...state, selectedImage: action.image};
        case 'IMAGE_LOAD_FAILURE':
            return state;
        default:
            return state;
    }
}