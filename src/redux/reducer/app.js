
import {SAVE_MENU, SAVE_INFO, DAY_NAME} from "../actions/types";
let initialState = {
	menu: [],
	info: {},
	day_name: "",
};
export default function(state = initialState, action) {
	switch (action.type) {
	case SAVE_MENU:
		return {...state, menu: action.payload};
	case SAVE_INFO:
		return {...state, info: action.payload};
	case DAY_NAME:
		return {...state, day_name: action.payload};
	default:
		return state;
	}
}
