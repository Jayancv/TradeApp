// 'use strict';
//
// const React = require('react');
// const ReactDOM = require('react-dom');
// const when = require('when');
// const client = require('./client');
// const follow = require('./follow');
//
//
// import AddUserDialog from './AddUserDialog';
// import UserList from './UserList';
//
// const root = '/api'
// var stompClient = require('./webSocket-listener')
//
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             users: [],
//             page: 2,
//             pageNo: 1,
//             attributes: [],
//             links: {},
//             loggedInUser: this.props.loggedInUser
//         }
//         this.updatePageSize = this.updatePageSize.bind(this);
//         this.onCreate = this.onCreate.bind(this);
//         this.onDelete = this.onDelete.bind(this);
//         this.onUpdate = this.onUpdate.bind(this);
//         this.onNavigate = this.onNavigate.bind(this);
//         this.refreshCurrentPage = this.refreshCurrentPage.bind(this);
//         this.refreshAndGoLastPage = this.refreshAndGoLastPage.bind(this);
//
//
//     }
//
//     loadFromAPI(pageSize) {
//
//         follow(client, root, [
//             {rel: 'users', params: {size: pageSize}}
//         ]).then(userCollection => {
//             return client({
//                 method: 'GET',
//                 path: userCollection.entity._links.profile.href,
//                 headers: {'Accept': 'application/schema+json'}
//             }).then(schema => {
//                 this.schema = schema.entity;
//                 this.links = userCollection.entity._links;
//                 return userCollection;
//             });
//         }).then(userCollection => {
//             return userCollection.entity._embedded.users.map(user =>
//                 client({
//                     method: 'GET',
//                     path: user._links.self.href
//                 })
//             );
//         }).then(userPromises => {
//             return when.all(userPromises);
//         }).done(users => {
//             this.setState({
//                 users: users,
//                 attributes: Object.keys(this.schema.properties),
//                 page: pageSize,
//                 links: this.links
//
//             });
//         });
//     }
//
//     refreshAndGoLastPage(message) {
//         follow(client, root, [{
//             rel: 'users',
//             params: {size: this.state.page}
//         }]).done(response => {
//             if (response.entity._links.last !== undefined) {
//                 this.onNavigate(response.entity._links.last.href);
//             } else {
//                 this.onNavigate(response.entity._links.self.href);
//             }
//         })
//     }
//
//     refreshCurrentPage(message) {
//         follow(client, root, [{
//             rel: 'users',
//             params: {
//                 size: this.state.page,
//                 page: this.state.pageNo.number}
//         }]).then(userCollection => {
//
//             this.links = userCollection.entity._links;
//             this.pageNo = userCollection.entity.page;
//             return userCollection.entity._embedded.users.map(user => {
//                 return client({
//                     method: 'GET',
//                     path: user._links.self.href
//                 })
//             });
//         }).then(userPromises => {
//             return when.all(userPromises);
//         }).then(users => {
//             this.setState({
//                 pageNo: this.pageNo,
//                 users: users,
//                 attributes: Object.keys(this.schema.properties),
//                 page: this.state.page,
//                 links: this.links
//             });
//         });
//
//     }
//
//     onCreate(newUser) {
//         follow(client, root, ['users']).done(response => {
//             client({
//                 method: 'POST',
//                 path: response.entity._links.self.href,
//                 entity: newUser,
//                 headers: {'Content-Type': 'application/json'}
//             })
//         })
//
//     }
//
//     onUpdate(user, updatedUser) {
//
//         client({
//             method: 'PUT',
//             path: user.entity._links.self.href,
//             entity: updatedUser,
//             headers: {
//                 'Content-Type': 'application/json',
//                 'If-Match': user.headers.Etag
//             }
//         }).done(response => {
//             this.loadFromAPI(this.state.page);
//         }, response => {
//             if (response.status.code === 412) {
//                 alert('DENIED: Unable to update' + user.entity._links.self.href)
//             }
//         });
//     }
//
//     onDelete(user) {
//         client({
//             method: 'DELETE',
//             path: user.entity._links.self.href
//         }).done(response => {
//             this.loadFromAPI(this.state.page)
//         })
//     }
//
//     updatePageSize(pageSize) {
//         if (pageSize !== this.state.pageSize) {
//             this.loadFromAPI(pageSize);
//         }
//     }
//
//     onNavigate(navUri) {
//         client({
//             method: 'GET',
//             path: navUri
//         }).then(userCollection => {
//             this.links = userCollection.entity._links;
//             return userCollection.entity._embedded.users.map(user =>
//                 client({
//                     method: 'GET',
//                     path: user._links.self.href
//                 })
//             );
//
//         }).then(userPromises => {
//             return when.all(userPromises);
//         }).done(users => {
//             this.setState({
//                 users: users,
//                 attributes: Object.keys(this.schema.properties),
//                 page: this.state.page,
//                 links: this.links
//             });
//         });
//     }
//
//     componentDidMount() {
//         this.loadFromAPI(this.state.page);
//         console.log(this.state);
//
//         stompClient.register([
//             {route: '/topic/newUser', callback: this.refreshAndGoLastPage},
//             {route: '/topic/deleteUser', callback: this.refreshCurrentPage},
//             {route: '/topic/updateUser', callback: this.refreshCurrentPage}
//         ])
//     }
//
//     render() {
//         return (
//             <div>
//                 <h2>Load</h2>
//                 <UserList usersList={this.state.users}
//                           links={this.state.links}
//                           pageSize={this.state.page}
//                           attributes={this.state.attributes}
//                           onNavigate={this.onNavigate}
//                           onDelete={this.onDelete}
//                           onUpdate={this.onUpdate}
//                           updatePageSize={this.updatePageSize}/>
//
//                 <AddUserDialog attributes={this.state.attributes} onCreate={this.onCreate}/>
//                 <h2>Done</h2>
//             </div>
//         )
//     }
//
// }
//
// ReactDOM.render(
//     <App/>,
//     document.getElementById('react')
// )
//



import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "../resources/static/assets/css/nucleo-icons.css";
import "../resources/static/assets/scss/blk-design-system-react.scss";
import "../resources/static/assets/demo/demo.css";
import '../resources/static/assets/css/index.css'

import Index from "./views/Index";
import LandingPage from "./views/examples/LandingPage";
import RegisterPage from "./views/examples/RegisterPage";
import ProfilePage from "./views/examples/ProfilePage";
import ContactPage from "./views/examples/ContactPage";
import Cart from "./views/examples/Cart";


class AppRoute extends Component {
  render() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/components" render={props => <Index {...props} />} />
            <Route
                path="/landing-page"
                render={props => <LandingPage {...props} />}
            />
            <Route
                path="/register-page"
                render={props => <RegisterPage {...props} />}
            />
            <Route
                path="/profile-page"
                render={props => <ProfilePage {...props} />}
            />
            <Route
                path="/contact-page"
                render={props => <ContactPage {...props} />}
            />
            <Route
                path="/cart"
                render={props => <Cart {...props} />}
            />
            <Redirect from="/" to="/components" />/contact-page
        </Switch>
    </BrowserRouter>
      );
      }
    }

    export default AppRoute;

