import React, {useState} from "react";
import Loader from "react-loader-spinner";

const Loading = (props) => {	
	return (
		<div className="loaderHolder">
			<div className="loaderMain">
				<Loader
					type="Circles"
					color="#f9cc38"
					height={100}
					width={100}
				/>
				<div>{props.message}</div>
			</div>
		</div>
	);
};

export const IsLoadingHOC =  ( WrappedComponent, loadingMessage) => {
	
	function HOC(props) {
		const [isLoading, setLoading] =  useState(false);

		const setLoadingState = isComponentLoading => {
			setLoading(isComponentLoading);
		};
        
		return (
			<>
				{isLoading && <Loading message={loadingMessage} />}
				<WrappedComponent {...props} setLoading={setLoadingState} />
			</>
		);
	}
	return HOC;
};

export default IsLoadingHOC;