import { IMAGES_SEARCH } from './constants';

export function searchImages(value, columns) {
  return {
    type: IMAGES_SEARCH,
    payload: {
      value,
      columns
    }
  };
}

export default searchImages;
