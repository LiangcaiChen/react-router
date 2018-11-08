import _ from 'lodash';
import { FETCH_POST, SHOW_BLOG, DELETE_BLOG } from '../actions/BlogAction';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_POST:
            return _.mapKeys(action.payload.data, 'id');

        case SHOW_BLOG:
            const {data} = action.payload;
            return {...state, [data.id]: data};

        case DELETE_BLOG:
            // check if the state has the key = action.payload, if it has then drop it
            return _.omit(state, action.payload);

        default:
            return state;
    }
}