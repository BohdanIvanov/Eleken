import { AppNavigator } from './index';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('SearchPage'));

const navigator = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

export default navigator;
