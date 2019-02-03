import { FETCH_PROFILES, UPDATE_PROFILE } from './types';

export const fetchProfiles = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(profiles => dispatch({
    type: FETCH_PROFILES,
    payload: profiles
  }))
  // .then(profiles => console.log(profiles))
  .catch(err => console.error(err))
} 

export const updateProfile = (postId, field, value) => ({
  type: UPDATE_PROFILE,
  payload: {
    postId,
    field,
    value
  }
})