import { groups, items } from '../data/list'

const defaultState = {
	items: items,
	groups: groups,
}

const add = 'add'
const changeSucsess = 'cahnge-sucsses'

export const listReducer = (state = defaultState, action) => {
	switch (action.type) {
		case add:
			return { ...state, items: [action.payload, ...state.items] }
		case changeSucsess:
			const initialValue = []
			const sumWithInitial = state.items.reduce((accumulator, currentValue) => {
				if (currentValue.id == action.payload) {
					currentValue.isSucsses = !currentValue.isSucsses
				}
				accumulator.push(currentValue)
				return accumulator
			}, initialValue)
			return { ...state, items: sumWithInitial }
		default:
			return state
	}
}
export const addItem = payload => ({
	type: add,
	payload,
})
export const changeSucsses = payload => ({
	type: changeSucsess,
	payload,
})
