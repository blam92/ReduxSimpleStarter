export default function({ dispatch }) {
  return next => action => {
    if(!action.payload || !action.payload.then) {
      return next(action);
    }

    action.payload.then((res) => {
      dispatch({ ...action, payload: res.data });
    });
  }
}