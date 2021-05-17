const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'user/LOGIN_FAILURE';
const LOGOUT_SUCCESS = 'user/LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'user/LOGOUT_FAILURE';

export const login_success = data => ({ type: LOGIN_SUCCESS, data })
export const login_fail = err => ({ type: LOGOUT_FAILURE, err })

const initialstate = {
  loginLoading: false,
  loginDone: false,
  loginError: false,
  tocken: '',
  errMsg: '',
};

export default function user(state = initialstate, action){
  switch(action.type){
    case LOGIN_SUCCESS :
      return{
        loginLoading: false,
        loginDone: true,
        tocken: action.data
      }
    case LOGIN_FAILURE: 
      return {
        loginLoading: false,
        LoginError: true,
        loginDone: false,
        errMsg: action.error
      }
    default:
      return state;
  }
}