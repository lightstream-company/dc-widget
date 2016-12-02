import { handleActions } from 'redux-actions';
import { POST_RECEIVED, WALL_LOADED, WINDOW_RESIZED } from './events';

export default {
  wall: handleActions({
    [WALL_LOADED]: (state, action) => {
      return action.payload;
    },
    [POST_RECEIVED]: (state, action) => {
      return [action.payload, ...state.slice(0, state.length - 1)];
    }
  }, []),
  viewport: handleActions({
    [WINDOW_RESIZED]: (state, {payload}) => payload
  }, {
    width: 800,
    height: 600
  })
};
