import React from "react";
import {connect} from "react-redux";
import {portanPoint} from "../../redux/actions";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends React.Component {
	

	render () { 
		return (
			<Container fluid>
				<Row>
					<Col>1 of 3</Col>
					<Col xs={6}>2 of 3 (wider)</Col>
					<Col>3 of 3</Col>
				</Row>
				<Row>
					<Col>1 of 3</Col>
					<Col xs={5}>2 of 3 (wider)</Col>
					<Col>3 of 3</Col>
				</Row>
			</Container>
				
	
		);
	}
	
}

export default connect(null, {portanPoint})(Home);