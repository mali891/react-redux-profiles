import { FETCH_PROFILES } from '../actions/types';

const profilesReducer = (state = [], {type, payload}) => {
  switch (type) {
    case FETCH_PROFILES:
      return [
        ...state,
        ...payload
      ]

    default:
      return state;
  }
}

export default profilesReducer;