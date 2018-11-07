import _ from 'lodash';
import { FETCH_POST, CREATE_POST } from '../actions/BlogAction';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_POST:
            return _.mapKeys(action.payload.data, 'id');

        // case CREATE_POST:
        //     return {...state, action.payload.}

        default:
            return state;
    }
}