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


class Producta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iconTabs: 1

        };

    }

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    toggleTabs = (e, stateName, index) => {
        e.preventDefault();
        this.setState({
            [stateName]: index
        });
    };

    render() {

        return (
            <Col md="10" xl="6">
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
                                    <i className="tim-icons icon-spaceship" />
                                                Profile
                                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.iconTabs === 2 })}
                                    onClick={e => this.toggleTabs(e, "iconTabs", 2)}
                                    href="#pablo">
                                    <i className="tim-icons icon-settings-gear-63" />
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
                                    <i className="tim-icons icon-bag-16" />
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
                                    {this.props.item.title}<br />

                                </h4>
                                <img
                                    alt="..."
                                    className="img-fluid rounded shadow"
                                    src={this.props.item.img}
                                    style={{ width: "250px" }}
                                />
                                <br />
                                {/* <span to="/" className="tim-icons icon-cart" onClick={() => { this.handleClick(this.props.item.id) }}><i className="material-icons"></i></span> */}
                                <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.handleClick(this.props.item.id) }}><i className="material-icons">add</i></span>
                                <br />
                                <p><b>Price: {this.props.item.price}$</b></p>

                            </TabPane>
                            <TabPane tabId="link2">
                                <p>
                                    {this.props.item.spec}
                                </p>
                            </TabPane>
                            <TabPane tabId="link3">
                                <p>
                                    {this.props.item.desc}
                                </p>
                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>
            </Col>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

// export default Producta;
export default connect(mapStateToProps, mapDispatchToProps)(Producta);