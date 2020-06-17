/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../../actions/cartActions'

import classnames from "classnames";
// reactstrap components
import {
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iconTabs: 1,
            iconTabs2: 4,
            iconTabs3: 7,
            iconTabs4: 10,
            textTabs: 4
        };
    }

    toggleTabs = (e, stateName, index) => {
        e.preventDefault();
        this.setState({
            [stateName]: index
        });
    };

    handleClick = (id)=>{
            this.props.addToCart(id);
        }

    render() {

    let itemList = this.props.items.map(item=>{
                return(
                    <div className="card1" key={item.id}>
                            <div className="card1-image">
                                <img src={item.img} alt={item.title}/>
                                <span className="card1-title">{item.title}</span>
                                <span to="/" className="tim-icons icon-cart" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                            </div>

                            <div className="card1-content">
                                <p>{item.desc}</p>
                                <p><b>Price: {item.price}$</b></p>
                            </div>
                     </div>

                )
            });
        return (
            <div>
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box1">
                    {itemList}
                </div>
            </div>
            <div className="section section-tabs">
                <Container>
                    <div className="title">
                        <h3 className="mb-3">Products</h3>
                    </div>
                    <Row>
                        <Col className="ml-auto mr-auto" md="10" xl="6">
                            <div className="mb-3">
                                {/*<small className="text-uppercase font-weight-bold">*/}
                                    {/*With icons*/}
                                {/*</small>*/}
                            </div>
                            <Card>
                                <CardHeader>
                                    <Nav className="nav-tabs-info" role="tablist" tabs>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({
                                                    active: this.state.iconTabs === 1
                                                })}
                                                onClick={e => this.toggleTabs(e, "iconTabs", 1)}
                                                href="#pablo"
                                            >
                                                <i className="tim-icons icon-spaceship"/>
                                                Profile
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({active: this.state.iconTabs === 2})}
                                                onClick={e => this.toggleTabs(e, "iconTabs", 2)}
                                                href="#pablo">
                                                <i className="tim-icons icon-settings-gear-63"/>
                                                Specs
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({
                                                    active: this.state.iconTabs === 3
                                                })}
                                                onClick={e => this.toggleTabs(e, "iconTabs", 3)}
                                                href="#pablo"
                                            >
                                                <i className="tim-icons icon-bag-16"/>
                                                Options
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </CardHeader>
                                <CardBody>
                                    <TabContent
                                        className="tab-space"
                                        activeTab={"link" + this.state.iconTabs}
                                    >
                                        <TabPane tabId="link1">
                                            <h4>
                                                Tube 1 <br/>

                                            </h4>
                                            <img
                                                alt="..."
                                                className="img-fluid rounded shadow"
                                                src={require("../../../resources/static/assets/img/prod_1.jpg")}
                                                style={{ width: "300px" }}
                                            />
                                        </TabPane>
                                        <TabPane tabId="link2">
                                            <p>
                                                Completely synergize resource taxing relationships via
                                                premier niche markets. Professionally cultivate
                                                one-to-one customer service with robust ideas. <br/>
                                                <br/>
                                                Dynamically innovate resource-leveling customer service
                                                for state of the art customer service.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="link3">
                                            <p>
                                                Efficiently unleash cross-media information without
                                                cross-media value. Quickly maximize timely deliverables
                                                for real-time schemas. <br/>
                                                <br/>
                                                Dramatically maintain clicks-and-mortar solutions
                                                without functional solutions.
                                            </p>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="ml-auto mr-auto" md="10" xl="6">
                            <div className="mb-3">
                                {/*<small className="text-uppercase font-weight-bold">*/}
                                    {/*With icons*/}
                                {/*</small>*/}
                            </div>
                            <Card>
                                <CardHeader>
                                    <Nav className="nav-tabs-info" role="tablist" tabs>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({
                                                    active: this.state.iconTabs2 === 4
                                                })}
                                                onClick={e => this.toggleTabs(e, "iconTabs2", 4)}
                                                href="#pablo"
                                            >
                                                <i className="tim-icons icon-spaceship"/>
                                                Profile
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({
                                                    active: this.state.iconTabs2 === 5
                                                })}
                                                onClick={e => this.toggleTabs(e, "iconTabs2", 5)}
                                                href="#pablo"
                                            >
                                                <i className="tim-icons icon-settings-gear-63"/>
                                                Specs
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({
                                                    active: this.state.iconTabs2 === 6
                                                })}
                                                onClick={e => this.toggleTabs(e, "iconTabs2",6)}
                                                href="#pablo"
                                            >
                                                <i className="tim-icons icon-bag-16"/>
                                                Options
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </CardHeader>
                                <CardBody>
                                    <TabContent
                                        className="tab-space"
                                        activeTab={"link" + this.state.iconTabs2}
                                    >
                                        <TabPane tabId="link4">
                                            <p>
                                                2 administrate empowered markets via
                                                plug-and-play networks. Dynamically procrastinate B2C
                                                users after installed base benefits. <br/>
                                                <br/>
                                                Dramatically visualize customer directed convergence
                                                without revolutionary ROI.
                                            </p>
                                            <img
                                                alt="..."
                                                className="img-fluid rounded shadow"
                                                src={require("../../../resources/static/assets/img/prod_2.jpg")}
                                                style={{ width: "150px" }}
                                            />
                                        </TabPane>
                                        <TabPane tabId="link5">
                                            <p>
                                                2 resource taxing relationships via
                                                premier niche markets. Professionally cultivate
                                                one-to-one customer service with robust ideas. <br/>
                                                <br/>
                                                Dynamically innovate resource-leveling customer service
                                                for state of the art customer service.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="link6">
                                            <p>
                                                2 unleash cross-media information without
                                                cross-media value. Quickly maximize timely deliverables
                                                for real-time schemas. <br/>
                                                <br/>
                                                Dramatically maintain clicks-and-mortar solutions
                                                without functional solutions.
                                            </p>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="ml-auto mr-auto" md="10" xl="6">
                            <div className="mb-3">
                                {/*<small className="text-uppercase font-weight-bold">*/}
                                    {/*With icons*/}
                                {/*</small>*/}
                            </div>
                            <Card>
                                <CardHeader>
                                    <Nav className="nav-tabs-info" role="tablist" tabs>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({
                                                    active: this.state.iconTabs3 === 7
                                                })}
                                                onClick={e => this.toggleTabs(e, "iconTabs3", 7)}
                                                href="#pablo"
                                            >
                                                <i className="tim-icons icon-spaceship"/>
                                                Profile
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({
                                                    active: this.state.iconTabs3 === 8
                                                })}
                                                onClick={e => this.toggleTabs(e, "iconTabs3",8)}
                                                href="#pablo"
                                            >
                                                <i className="tim-icons icon-settings-gear-63"/>
                                                Specs
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({
                                                    active: this.state.iconTabs3 === 9
                                                })}
                                                onClick={e => this.toggleTabs(e, "iconTabs3", 9)}
                                                href="#pablo"
                                            >
                                                <i className="tim-icons icon-bag-16"/>
                                                Options
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </CardHeader>
                                <CardBody>
                                    <TabContent
                                        className="tab-space"
                                        activeTab={"link" + this.state.iconTabs3}
                                    >
                                        <TabPane tabId="link7">
                                            <p>
                                                3Collaboratively administrate empowered markets via
                                                plug-and-play networks. Dynamically procrastinate B2C
                                                users after installed base benefits. <br/>
                                                <br/>
                                                Dramatically visualize customer directed convergence
                                                without revolutionary ROI.
                                            </p>
                                            <img
                                                alt="..."
                                                className="img-fluid rounded shadow"
                                                src={require("../../../resources/static/assets/img/prod_3.jpg")}
                                                style={{ width: "150px" }}
                                            />
                                        </TabPane>
                                        <TabPane tabId="link8">
                                            <p>
                                                3Completely synergize resource taxing relationships via
                                                premier niche markets. Professionally cultivate
                                                one-to-one customer service with robust ideas. <br/>
                                                <br/>
                                                Dynamically innovate resource-leveling customer service
                                                for state of the art customer service.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="link9">
                                            <p>
                                                3Efficiently unleash cross-media information without
                                                cross-media value. Quickly maximize timely deliverables
                                                for real-time schemas. <br/>
                                                <br/>
                                                Dramatically maintain clicks-and-mortar solutions
                                                without functional solutions.
                                            </p>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="ml-auto mr-auto" md="10" xl="6">
                            <div className="mb-3">
                                {/*<small className="text-uppercase font-weight-bold">*/}
                                    {/*With icons*/}
                                {/*</small>*/}
                            </div>
                            <Card>
                                <CardHeader>
                                    <Nav className="nav-tabs-info" role="tablist" tabs>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({
                                                    active: this.state.iconTabs4 === 10
                                                })}
                                                onClick={e => this.toggleTabs(e, "iconTabs4", 10)}
                                                href="#pablo"
                                            >
                                                <i className="tim-icons icon-spaceship"/>
                                                Profile
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({
                                                    active: this.state.iconTabs4 === 11
                                                })}
                                                onClick={e => this.toggleTabs(e, "iconTabs4", 11)}
                                                href="#pablo"
                                            >
                                                <i className="tim-icons icon-settings-gear-63"/>
                                                Specs
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({
                                                    active: this.state.iconTabs4 === 12
                                                })}
                                                onClick={e => this.toggleTabs(e, "iconTabs4", 12)}
                                                href="#pablo"
                                            >
                                                <i className="tim-icons icon-bag-16"/>
                                                Options
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </CardHeader>
                                <CardBody>
                                    <TabContent
                                        className="tab-space"
                                        activeTab={"link" + this.state.iconTabs4}
                                    >
                                        <TabPane tabId="link10">
                                            <p>
                                                4Collaboratively administrate empowered markets via
                                                plug-and-play networks. Dynamically procrastinate B2C
                                                users after installed base benefits. <br/>
                                                <br/>
                                                Dramatically visualize customer directed convergence
                                                without revolutionary ROI.
                                            </p>
                                            <img
                                                alt="..."
                                                className="img-fluid rounded shadow"
                                                src={require("../../../resources/static/assets/img/prod_4.jpg")}
                                                style={{ width: "150px" }}
                                            />
                                        </TabPane>
                                        <TabPane tabId="link11">
                                            <p>
                                                4Completely synergize resource taxing relationships via
                                                premier niche markets. Professionally cultivate
                                                one-to-one customer service with robust ideas. <br/>
                                                <br/>
                                                Dynamically innovate resource-leveling customer service
                                                for state of the art customer service.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="link12">
                                            <p>
                                                4Efficiently unleash cross-media information without
                                                cross-media value. Quickly maximize timely deliverables
                                                for real-time schemas. <br/>
                                                <br/>
                                                Dramatically maintain clicks-and-mortar solutions
                                                without functional solutions.
                                            </p>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{

    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Tabs);
