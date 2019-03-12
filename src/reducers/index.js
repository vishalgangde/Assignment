import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import postReducer from './postReducer';
import {reducer as toastrReducer} from 'react-redux-toastr';


export default combineReducers({
    form : formReducer,
    post : postReducer,
        // ... other reducers ...
    toastr: toastrReducer // <- Mounted at toastr.
      
});
 
