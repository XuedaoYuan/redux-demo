import { ADD_ONE, ADD_MORE } from './constants'

export const addOne = {
	type: ADD_ONE
}

export const addMore = payload => ({
	type: ADD_MORE,
	payload
})
