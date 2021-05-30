
let initialState = {
	user: {},
};
export default function(state = initialState, action) {
	switch (action.type) {
	case "USER_DATA_SAVE":
		return {...state, user: action.payload};
	default:
		return state;
	}
}
