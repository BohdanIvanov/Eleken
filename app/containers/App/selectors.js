import { createSelector } from 'reselect';

export const selectApp = () => state => state.app;

export const selectSearchValue = () => createSelector(selectApp(), app => app.searchValue);

export const selectColumns = () => createSelector(selectApp(), app => app.columns);
