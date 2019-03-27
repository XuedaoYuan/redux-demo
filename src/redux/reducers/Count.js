import { ADD_ONE, ADD_MORE } from '../constants'

const initialState = {
	count: 0
}

export default function(state = initialState, action) {
	switch (action.type) {
		case ADD_ONE: {
			return {
				...state,
				count: state.count + 1
			}
		}
		case ADD_MORE: {
			console.log(action)
			return {
				...state,
				count: state.count + action.payload.n
			}
		}
		default: {
			return state
		}
	}
}
