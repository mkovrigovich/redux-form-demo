import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk'
import { reducer as formReducers } from 'redux-form';

import customReducers from './reducers'

const configureStore = (initialState) => {
  const reducers = {
    ...customReducers,
    form: formReducers
  }

  const middleware = [ thunk ]

  const enhancers = []
  const isDevelopment = process.env.NODE_ENV === 'development'

  if (isDevelopment && typeof window !== undefined && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension())
  }

  const rootReducer = combineReducers({
    ...reducers
  })

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware), ...enhancers)
  )
}

export { configureStore }