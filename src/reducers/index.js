import { combineReducers } from 'redux';
import profilesReducer from './profilesReducer';

const rootReducer = combineReducers({
  profiles: profilesReducer
})

export default rootReducer;