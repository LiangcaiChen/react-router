import {createStore, combineReducers, applyMiddleware} from 'redux';
import BlogsReducer from '../reducers/BlogsReducer';
import ReduxPromise from 'redux-promise';
import { reducer as formReducer } from 'redux-form';

export default () => {
    return createStore(
        combineReducers({
            blogs: BlogsReducer,
            form: formReducer
        }),applyMiddleware(ReduxPromise)
    )
}
