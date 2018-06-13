import { fetchSpots } from './spot';

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

export const updateBounds = bounds => ({
  type: UPDATE_BOUNDS,
  bounds
});


// export const UPDATE_FILTER = 'UPDATE_FILTER';
//
// export const changeFilter = (filter, value) => ({
//   type: UPDATE_FILTER,
//   filter,
//   value
// });
//
// export const updateFilter = (filter, value) => (dispatch, getState) => {
//   dispatch(changeFilter(filter, value));
//   return fetchSpots(getState().ui.filters)(dispatch);
// };
