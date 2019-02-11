import { FETCH_PROFILES, UPDATE_PROFILE, DELETE_PROFILE } from './types';

export const fetchProfiles = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(profiles => dispatch({
    type: FETCH_PROFILES,
    payload: profiles
  }))
  .catch(err => console.error(err))
} 

export const updateProfile = (profileId, field, value) => ({
  type: UPDATE_PROFILE,
  payload: {
    profileId,
    field,
    value
  }
})

export const deleteProfile = (profileId) => ({
  type: DELETE_PROFILE,
  payload: {
    profileId,
  }
})