/**
 * Created by Angelika on 09.06.2017.
 */

import test from 'tape';
import {put, take} from 'redux-saga/effects'
import {watchForLoadImages, loadImages} from './index';
import {fetchImages} from '../flickr';

test('watchForLoadImages', assert => {
    const gen = watchForLoadImages();

    assert.deepEqual(
        gen.next().value,
        take('LOAD_IMAGES'),
        'watchForLoadImages should be waiting for LOAD_IMAGES action'
    )

    assert.deepEqual(
        gen.next().value,
        false,
        'watchForLoadImages should call loadImages after LOAD_IMAGES action is received'
    );

    assert.end();
});