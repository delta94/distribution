import { createStore, applyMiddleware, compose } from 'redux';
import { sagaMiddleware } from '../saga';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  // https://github.com/zalmoxisus/redux-devtools-extension
  const debug =
    __DEV__ && __CLIENT__ && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f;

  if (initialState) {
    return createStore(
      rootReducer,
      initialState,
      compose(applyMiddleware(sagaMiddleware), debug),
    );
  }
  return createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware), debug),
  );
}
