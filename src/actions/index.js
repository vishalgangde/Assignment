import posts from '../apis/posts';
import post1 from '../apis/post1';
import history from '../history' 


import {
    POST_LIST,
    SINGLE_POST_LIST,
    CREATE_POST,
    EDIT_POST,
    DELETE_POST,
    
} from './types'
//import history from '../history';
//import {toaster} from 'react-redux-toastr';

//const toastrSuccessFunction = (title,msg) => toastr.success(title,msg)
//const toastrWarningFunction = (title,msg) => toastr.error(title,msg) 
/*const  {
    "Content-Type" : "application/json"
}*/



export const signIn = (formValue) => async (dispatch) => {
    console.log(formValue)

    try{
        const response  = await posts.post('/jwt-auth/v1/token',{...formValue});
        console.log(response);
       // console.log(response.data.user_display_name)
        /*localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("displayName", response.data.user_name);
        localStorage.setItem("logInUserId", response.data.user_id);
        history.push('/');*/

         localStorage.setItem("authToken",response.data.token);
         localStorage.setItem("displayname",response.data.user_display_name);
         localStorage.setItem("userId",response.data.user_id);
         console.log('renderAdminList',localStorage.getItem('userId'));
         history.push('/');
        
    }
    catch(error){
        console.log('renderAdminList',localStorage.getItem('userId'));
         //toastrSuccessFunction(`SignIn Successful`,`${formValues.username}`)
    }
}
       
      
      

export const loggedOut = () =>  {
    localStorage.removeItem("loggedInUserId")
    localStorage.removeItem("authToken");

    //toastrSuccessFunction(`LogOut Status`,`You are logout Successfully`);
}

export const RegisterUser = formValue => async (dispatch) => {
    console.log(formValue)
    try{
    const response = await posts.post('/wp/v2/users/register', { ...formValue });
   // toastrSuccessFunction(`${response.data.message}`,`${formValues.username}`)
    console.log(response.data,'RegisterUser');
    }
    

catch(error){
   // toastrWarningFunction(`Registeration Failed`,`${formValues.username}`);
}

};

export const createpost = formValue => async (dispatch,getState) => {
    //{user_id} = getState.data()
    const response = await post1.post('/wp/v2/posts', { ...formValue });
    console.log(response);
    dispatch({ type: CREATE_POST, payload: response.data });
};

export const postList = () => async (dispatch) => {
    //console.log(header)
    const response = await posts.get('/wp/v2/posts');
    console.log(response.data, "aaaa");
    dispatch({ type: POST_LIST, payload: response.data });
};
 
    export const SinglePostList = id => async (dispatch) => {
        const response = await post1.get(`/wp/v2/posts/${id}`);
        console.log(response);
        dispatch({type: SINGLE_POST_LIST, payload: response.data});
    }; 

export const EditPost = (id,formValue) => async (dispatch) => {
    const response = await post1.put(`/wp/v2/posts/${id} `,{...formValue});
    console.log(response);
    dispatch({ type: EDIT_POST, payload: response.data });
};

export const DeletePostid = (id) => async (dispatch) => {
    const response = await post1.delete(`/wp/v2/posts/${id}`);
    console.log(response);
    dispatch({ type: DELETE_POST, payload: id });
};



