import {defaultOptions} from "../config";
import {store} from "../redux/store";

class Api {

	post(path, data = null) {
		return this.send(path, "POST", data);
	}

	put(path, data = null) {
		return this.send(path, "PUT", data);
	}

	get(path, data = null) {
		return this.send(path, "GET", data);
	}

	delete(path, data = null) {
		return this.send(path, "DELETE");
	}

	send(url, method, data) {
		
		let language = store.getState("app").app.language;
		let token = store.getState("app").app.token;
		let uri = `${defaultOptions.baseUrl}${url}`;
		console.log(uri);
		const headers = {
			"Ocp-Apim-Subscription-Key": `${defaultOptions.apikey}`,
			"Content-Type": "application/json",
			localization: language ? language : "en",
		};
		if (token) {
			headers.Authorization = `Bearer ${token}`;
		}
		return new Promise((resolve, reject) => {
			console.log({
				uri, method, headers, data,
			});
			let option = "";
			if(method === "GET") {
				option = { method, headers};
			} else {
				option = { method, headers, body: JSON.stringify(data)};
			}
			console.log("option", option);
      
			fetch(uri, option)
				.then(response => {
					console.log(response);
					if (response.ok) {
						return response.json();
					}
					// Possible 401 or other network error
					console.log("status", response.status);
					if (
						response.status === 500 ||
            response.status === 404 ||
            response.status === 401
					) {
						let customResponse = {
							status: 0,
							data: {
								error: ["Something go wrong"],
							},
						};
						return customResponse;
						// reject(new Error(customResponse));
					} else if(response.status === 400){
						return response.json();
					}
					return response
						.json()
						.then(errorResponse => Promise.reject(errorResponse));
				})
				.then(responseData => {
					// debugger;
					console.log(responseData);
					resolve(responseData);
				})
				.catch(error => {
					console.log("error", error);
					reject(error);
				});
		});
	}
}

export const api = new Api();
