import {combineReducers} from 'redux';
import BlogsReducer from './BlogsReducer';

export default () => {
    return(
        combineReducers({
            blogs: BlogsReducer
        })
    )
}