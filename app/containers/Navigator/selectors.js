import { createSelector } from 'reselect';

export const selectNavigator = () => state => state.navigator;

export const selectRoutes = () => createSelector(selectNavigator(), navigator => navigator.routes);
