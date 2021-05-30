import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getData} from "../../redux/actions";
import {Container, Row, Col, Tab, Tabs} from "react-bootstrap";
import Banner from "../../components/Banner";
import {IsLoadingHOC} from "../../components/IsLoadingHOC";
const Home  = ({menu, getData, currency_code, setLoading}) => {
	
	useEffect(() => {
		setLoading(true);
		getData().then(response => {
			setLoading(false);
		}).catch(error => {
			setLoading(false);
			console.log(error);
		});
	}, [getData]);

	const getList = (menu_categories) => {
		let dataList = [];
		menu_categories.forEach(cat => {
			if(cat.items) {
				dataList = [...dataList, ...cat.items];
			}
		});
		return	dataList.map((cat, index) => {
			return (
				<div className="menulist" key={index}>
					<Row>
						<Col xs={4}> 
							<img className="menulist-image" alt="name" src={cat.image?cat.image: "https://dxp-hospitality-dev-rg-sit-467300-cd2.azurewebsites.net//-/mediadh/dh/hospitality/e-menu/menus/aqpool/aqpool.jpg"} />
						</Col>
						<Col className="content">

							<div className="name">{cat.name}</div>
							<div className="price">{currency_code} {cat.price}</div>
							<div className="address">{cat.description}</div>

						</Col>
					</Row>
				</div>
			);
		});
	};
	return (
		<>
			
			<Banner/>
			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				{
					menu.map((item) => {
						const menuMain = item;
						return 	menuMain.menu_sections.map((item, index) => {
							return (
								<Tab eventKey="home" title={item.section_name} key={index}>
									<ul className="breadcrumbCustom">
										{
											item.menu_categories.map(((cat, index) => {
												return (<li key={index}><a href="#header">{cat.name}</a></li>);
											}))
										}
									</ul>
									<Container fluid>
										<div className="menu-title">
											{menuMain.menu_name}
										</div>
										{
											getList(item.menu_categories)
										}
									</Container>
								</Tab>
				
							);
						});
						
					})
				}
				<Tab eventKey="allday" title="All Days">
					<div>All Day Content</div>
				</Tab>
				<Tab eventKey="drink" title="Drink">
					<div> Drink Content	</div>
				</Tab>
			</Tabs>
			
		</>
	);
};
	
const mapStateToProps = ({app}) => {
	const {menu, info} = app;
	return {
		menu,
		currency_code: info.currency_code,	
	};
};
export default connect(mapStateToProps, {getData})(IsLoadingHOC(Home, "Waiting..."));