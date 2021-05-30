import React, {useEffect, useState} from "react";
import Card from "./Card";
import {connect} from "react-redux";

import {portanPoint} from "../redux/actions";

const PortalPointList = (props) => {
	const [data, setData] = useState([]);
	const [viewMore, setViewMore] = useState(true);
	const [page, setPage] = useState(0);
//	const [end, setEnd] = useState(false);
	useEffect(() => {
		getNextData(0);
	}, []);
	const getNextData = (page) => {
		props.portanPoint(page+1).then(response => {
			setData([...data, ...response.data]);
			setPage(page+1);
			setViewMore(response.end);
		});
	};
	//console.log(data);
	return (
		<div>
			<div className="container portal-point-list">
				{
					data.map((item, index) => {
						return (
							<Card key={index}>
								<img src={item.cardHeaderImage} alt="Avatar" style={{width:"100%"}}/>
								<div className="container-card ">
									<h4><b>Points: </b><span>{item.points}</span></h4> 
									<h4><b>{item.title}</b></h4> 
								</div>
							</Card>);
					})
				}
			</div>
			{
				viewMore && <div onClick={() => getNextData(page)}>View More</div> 
			}
		</div>
	);
};

export default connect(null, {portanPoint})(PortalPointList);