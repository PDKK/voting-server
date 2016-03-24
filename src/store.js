/**
 * Created by Paul.Knox-Kennedy on 24/03/16.
 */
import {createStore} from 'redux';
import reducer from './reducer';

export default function makeStore() {
    return createStore(reducer);
}