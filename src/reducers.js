import {handleActions} from 'redux-actions';
import { POST_RECEIVED, WALL_LOADED } from './events';

export default handleActions({
  [WALL_LOADED]: (state, action) => {
    return action.payload;
  },
  [POST_RECEIVED]: (state, action) => {
    return [action.payload, ...state.slice(0, state.length - 1)];
  }
}, []);
