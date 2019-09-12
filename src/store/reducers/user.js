import {
  LOGIN,
} from '../constants'


const INITIAL_STATE = {
  loginInfo: {}
}



export default (state = INITIAL_STATE, action) => {
  console.log(state)
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
