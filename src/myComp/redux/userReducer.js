const initialState = {
    name: 'Please Login',
    loggedIn: false,
}

const userReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'LOGIN': return {name:action.payload, loggedIn:true};
        case 'LOGOUT': return initialState;
        default: return state;
    }
};

export default userReducer;