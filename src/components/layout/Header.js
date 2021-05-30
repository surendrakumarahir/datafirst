import React from "react";
import Menu from "../menu";
import {getManu} from "../../redux/actions";
import {connect} from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

class Header extends  React.Component {
	
	render(){ 
		return (
			 <header>
				
				 <Menu/>
				
			</header>
		);
	}
	
}
export default connect(null, {getManu})(Header);
