import { ADD_ONE, ADD_MORE } from './constants'

export const addOne = {
	type: ADD_ONE
}

export const addMore = payload => ({
	type: ADD_MORE,
	payload
})

// 异步action
export const addAsync = function() {
	return (dispatch, getState) => {
		// 异步操作
		setTimeout(() => {
			dispatch(addMore({ n: 10 }))
		}, 1000)
	}
}
