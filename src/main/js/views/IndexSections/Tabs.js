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
import Producta from './Producta';

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

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {

        let itemList = this.props.items.map(item => {
            return (
                <div className="card1" key={item.id}>
                    <div className="card1-image">
                        <img src={item.img} alt={item.title} />
                        <span className="card1-title">{item.title}</span>
                        <span to="/" className="tim-icons icon-cart" onClick={() => { this.handleClick(item.id) }}><i className="material-icons">add</i></span>
                    </div>

                    <div className="card1-content">
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}$</b></p>
                    </div>
                </div>

            )
        });

        const prodList = this.props.items.map(item => 
            <Producta key={item.id}
                     item={item} />

        );


        return (
            <div>
                <div className="section section-tabs">
                    <Container>
                        <div className="title">
                            <h3 className="mb-3">Products</h3>
                        </div>
                        <Row>
                        {prodList}
                        </Row>
                    </Container>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
