import { createStore, applyMiddleware, compose } from 'redux'
import rootReducers from './reducers'
import thunk from 'redux-thunk'
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f
const store = createStore(
	rootReducers,
	compose(
		applyMiddleware(),
		reduxDevtools
	)
)
export default store
