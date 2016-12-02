import { createAction } from 'redux-actions';
import { POST_RECEIVED, WALL_LOADED, WINDOW_RESIZED } from './events';

export const wallLoaded = createAction(WALL_LOADED);
export const postReceived = createAction(POST_RECEIVED);
export const windowResized = createAction(WINDOW_RESIZED, () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
});
