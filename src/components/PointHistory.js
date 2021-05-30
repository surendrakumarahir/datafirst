import React, {useEffect, useState} from "react";
import Card from "./Card";
import {connect} from "react-redux";

import {pointHistoryGet} from "../redux/actions";

const PointHistory = (props) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		props.pointHistoryGet().then(response => {
			setData(response.body.pointHistory);
		});
	}, [props]);
	return (
		<div className="container portal-history">
			{
				data.map((item, index) => {
					return (
						<Card key={index}>
							<div className="history-card">
								<h4><b>{item.ledger}</b><b> Points: </b><span>{item.points}</span></h4> 
								<h4><b>{item.date}</b></h4> 
								<div>{item.description}</div>
							</div>
						</Card>);
				})
			}
		</div>
	);
};

export default connect(null, {pointHistoryGet})(PointHistory);