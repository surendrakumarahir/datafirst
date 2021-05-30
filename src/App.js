import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
 import "./assets/css/theme.css";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import routes from "./routing/Routing";

class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>{routes}</Switch>
			</Router>
		
		);
	}
}
export default App; 
