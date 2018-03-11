/**
 * Create the store
 */

// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';

// // import promiseMiddleware from './middleware/promiseMiddleware';
// import createReducer from './reducers';

// export default function configureStore(initialState = {}) {
//   const middlewares = [thunk];

//   const enhancers = [applyMiddleware(...middlewares)];

//   const store = createStore(createReducer(), initialState, compose(...enhancers));

//   return store;
// }

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createReactNavigationReduxMiddleware, createReduxBoundAddListener } from 'react-navigation-redux-helpers';

import createReducer from './reducers';

const navigationMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav);

export const addNavigationListener = createReduxBoundAddListener('root');

export default function configureStore(initialState = {}) {
  const middlewares = [thunk, navigationMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(createReducer(), initialState, compose(...enhancers));

  return store;
}
