import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import {connect} from "react-redux";
const Image = styled.div`
  width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
    margin-bottom: 30px;
`;
const Title = styled.div`
      color: #fff;
	  font-size: 30px;
`;

const Banner = ({restaurant_name, image_url}) => {
	return (
		<Image style={{backgroundImage: `url(${image_url})`}}>
			<div className="banner-text">
				<div>
					<Title>{restaurant_name}</Title>
				</div>
				<div><Button  className="orderNow">My Order</Button></div>
			</div>
		</Image>
	);
};

const mapStateToProps = ({app}) => {
	const {info} = app;
	console.log("check props", info.image_url);
	return {
		image_url: info.image_url, 
		restaurant_name: info.restaurant_name,
	};
};
export default connect(mapStateToProps)(Banner);