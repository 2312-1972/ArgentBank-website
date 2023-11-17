// reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  // ... d'autres reducers si vous en avez
});

export default rootReducer;
