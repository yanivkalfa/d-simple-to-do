import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import rootReducer from 'reduxContent';

export default function configStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        thunk,
        reduxImmutableStateInvariant(),
        createLogger({
          level: 'info',
          collapsed: true
        })
      ),
      devTools()
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reduxContent', () => {
      const nextRootReducer = require('../reduxContent/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

function devTools() {
  return typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !==  'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;
}
