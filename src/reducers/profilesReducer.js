import { FETCH_PROFILES, UPDATE_PROFILE } from '../actions/types';

const profilesReducer = (state = [], {type, payload}) => {
  switch (type) {
    case FETCH_PROFILES:
      return [
        ...state,
        ...payload
      ]
    
    case UPDATE_PROFILE:
    const { field, postId, value } = payload;
    const stateCopy = {...state[postId]}

    stateCopy[field] = value;

      return [
        ...state.slice(0, postId),
        {...stateCopy},
        ...state.slice(postId + 1)
       ]

    default:
      return state;
  }
}

export default profilesReducer;