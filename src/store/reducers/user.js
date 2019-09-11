import {
  LOGIN,
} from '../constants'


const INITIAL_STATE = {
  loginInfo: {},
}



export default function user (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        loginInfo: action.data
      }
    }
    default:
      return state
  }
}
