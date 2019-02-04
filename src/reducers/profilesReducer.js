import { FETCH_PROFILES, UPDATE_PROFILE, DELETE_PROFILE } from '../actions/types';

const profilesReducer = (state = [], {type, payload}) => {
  switch (type) {
    case FETCH_PROFILES:
      return [
        ...state,
        ...payload
      ]
    
    case UPDATE_PROFILE:
      const { field, postId, value } = payload;
      const stateCopy = [...state];
      const profileCopy = {...state[postId]};

      profileCopy[field] = value;

      return [
        ...stateCopy.slice(0, parseInt(postId)),
        {...profileCopy},
        ...stateCopy.slice((parseInt(postId) + 1), (stateCopy.length + 1))
      ]

    default:
      return state;
  }
}

export default profilesReducer;