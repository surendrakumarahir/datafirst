import React, { Fragment } from "react";
import Header from "../layout/Header";


export default  ({children}) => (
	<Fragment>
		<Header/>
		{children}
	</Fragment>
);
