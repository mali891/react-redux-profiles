import { FETCH_PROFILES, UPDATE_PROFILE, DELETE_PROFILE } from '../actions/types';

const deleteProfile = (state, payload) => {
  console.log(payload)
  const { profileId } = payload;
  const stateCopy = [...state];

  const newState = stateCopy.filter(profile => (profile.id - 1) !== profileId);

  return newState;
}

const profilesReducer = (state = [], {type, payload}) => {
  switch (type) {
    case FETCH_PROFILES:
      return [
        ...state,
        ...payload
      ]
    
    case UPDATE_PROFILE:
      const { field, profileId, value } = payload;
      const stateCopy = [...state];
      const profileCopy = {...state[profileId]};

      profileCopy[field] = value;

      return [
        ...stateCopy.slice(0, parseInt(profileId)),
        {...profileCopy},
        ...stateCopy.slice((parseInt(profileId) + 1), (stateCopy.length + 1))
      ]

    case DELETE_PROFILE:
      return deleteProfile(state, payload);

    default:
      return state;
  }
}

export default profilesReducer;