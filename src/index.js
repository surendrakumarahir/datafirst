import React from "react";
import { render } from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {store, persistor} from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";


render(
	<Provider store={store}>
	 <PersistGate loading={null} persistor={persistor}>
	    <App />
	 </PersistGate>
	</Provider>
	, document.getElementById("root"));
