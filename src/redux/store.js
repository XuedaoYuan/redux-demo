import { createStore, applyMiddleware, compose } from 'redux'
import rootReducers from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f
const store = createStore(
	rootReducers,
	compose(
		applyMiddleware(thunk, logger),
		reduxDevtools
	)
)

/* function addAsync(num) {
	return (dispatch, getState) => {
		dispatch({ type: 'YXD/ADD_ONE' })
		setTimeout(() => {
			const state = getState()
			dispatch({
				type: 'YXD/ADD_MORE',
				payload: { n: num }
			})
		}, 2000)
	}
} */

// store.dispatch(addAsync(20))

export default store
