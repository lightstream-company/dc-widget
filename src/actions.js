import {createAction} from 'redux-actions';
import { POST_RECEIVED, WALL_LOADED } from './events';

export const wallLoaded = createAction(WALL_LOADED);
export const postReceived = createAction(POST_RECEIVED);
