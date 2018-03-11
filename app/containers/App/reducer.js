import { IMAGES_SEARCH } from './constants';

const initialState = {
  columns: 1,
  searchValue: ''
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case IMAGES_SEARCH:
      return {
        ...state,
        searchValue: action.payload.value,
        columns: action.payload.columns
      };
    default:
      return state;
  }
}
