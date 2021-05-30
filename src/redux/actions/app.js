import {
	SAVE_MENU,
	SAVE_INFO,
	DAY_NAME,
} from "./types";
import {api} from "../../api";


export const  getData = () => async dispatch => {
	//console.log("wokring");
	return new Promise(async (resolve, reject) => {
		const result = await api.get("/restaurants/info/v1/QA-SUGARMASH/menu");
		console.log("result", result);
		if(result.success === true) {
			dispatch({type:SAVE_MENU, payload: result.menu});
			dispatch({type:SAVE_INFO, payload: result.info});
			dispatch({type:DAY_NAME, payload: result.day_name});
			resolve("Success");
		} else {
			reject("Error");
		}
	});

};


