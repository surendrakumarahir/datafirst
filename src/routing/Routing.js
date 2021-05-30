import React from "react";
import Home from "../screen/Home";

import { Route } from "react-router-dom";
import AppRoute from "./AppRoute";
import PublicLayout from "../components/layout/PublicLayout";

const routes = (
	<>  
		<AppRoute exact path="/" component={Home} layout={PublicLayout} />
	</>
);
export default routes;
