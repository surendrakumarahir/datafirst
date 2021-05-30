import {
	USER_DATA_SAVE,
} from "./types";
import {api} from "../../api";
import {portalPoints, menu, pointHistory} from "../../data";


export const  portanPoint = (id) => async dispatch => {
	console.log("wokring");
	return new Promise(async(resolve, reject) => {
		//const result = await api.get("/dev");
		//console.log(result);
		let arr = portalPoints.body.portalPoints;
		const length = arr.length;
		console.log(length, id*8);
		let end = true;
		if(length < (id+1)*8) {
			end(false);
		}
		if(length > id*8)  {
			resolve({end: end, data: arr.slice(id*8, id*8+8)});
			
		}
		resolve([]);
		
	});
};

export const  pointHistoryGet = () => async dispatch => {
	console.log("wokring");
	return new Promise(async(resolve, reject) => {
		//const result = await api.get("/dev");
		//console.log(result);
		resolve(pointHistory);
	});
};

export const  getManu = () => async dispatch => {
	console.log("wokring");
	return new Promise(async(resolve, reject) => {
		//const result = await api.get("/dev");
		//console.log(result);
		resolve(menu);
	});
};

