import _ from 'lodash';
import { 
        POST_LIST
        /* SINGLE_POST_LIST,
        CREATE_POST,
        UPDATE_POST,
        DELETE_POST */
    } from '../actions/types';
    

    export default (state = {}, action) => {
        switch(action.type){
            case POST_LIST:
                return{...state, ..._.mapKeys(action.payload,'id')};

            /* case SINGLE_POST_LIST:
            return{...state, [action.payload.id] : action.payload};
 */
            /* case CREATE_POST:
            return {...state, [action.payload.id] : action.payload}; */

           /*  case UPDATE_POST:
            return{...state, [action.payload.id] : action.payload};

            case DELETE_POST:
            return _.omit(state,action.payload); */

            default:
            return state;
        }
    };
