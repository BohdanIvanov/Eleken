import { combineReducers } from 'redux';

import navigator from 'app/containers/Navigator/reducer';
import app from 'app/containers/App/reducer';

export default function createReducer() {
  return combineReducers({
    navigator,
    app
  });
}
