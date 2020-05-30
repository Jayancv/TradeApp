import React from 'react';
import ReactDOM from 'react-dom';

import UserRow from './UserRow';

class UserList extends React.Component {

    constructor(props){
        super(props);
        this.handleNavFirst = this.handleNavFirst.bind(this);
        this.handleNavPrev = this.handleNavPrev.bind(this);
        this.handleNavNext = this.handleNavNext.bind(this);
        this.handleNavLast = this.handleNavLast.bind(this);
        this.handleInput=this.handleInput.bind(this);

    }
    handleInput(e){
        e.preventDefault();
        const pageSize = ReactDOM.findDOMNode(this.refs.pageSizeRef).value;
        if( /^[0-9]+$/.test(pageSize)){
            this.props.updatePageSize(pageSize);
        }else {
            ReactDOM.findDOMNode(this.refs.pageSizeRef).value = pageSize.substring(0,pageSize.length -1);
        }

    }

    handleNavFirst(e){
        e.preventDefault();
        this.props.onNavigate(this.props.links.first.href);
    }

    handleNavPrev(e) {
        e.preventDefault();
        this.props.onNavigate(this.props.links.prev.href);
    }

    handleNavNext(e) {
        e.preventDefault();
        this.props.onNavigate(this.props.links.next.href);
    }

    handleNavLast(e) {
        e.preventDefault();
        this.props.onNavigate(this.props.links.last.href);
    }
    render() {
        const userSet = this.props.usersList.map(user =>
            <UserRow key={user.entity._links.self.href}
                     user={user}
                     onDelete={this.props.onDelete}
                     onUpdate={this.props.onUpdate}
                     attributes={this.props.attributes}/>
        );

        const navLinks =[];

        if ( "first" in this.props.links) {
            navLinks.push(
                <button key="first" onClick={this.handleNavFirst} >&lt;&lt; First</button>
            )
        }
        if ( "prev" in this.props.links) {
            navLinks.push(
                <button key="prev" onClick={this.handleNavPrev} >&lt; Previous</button>
            )
        }
        if ( "next" in this.props.links) {
            navLinks.push(
                <button key="next" onClick={this.handleNavNext} >&gt; Next</button>
            )
        }
        if ( "last" in this.props.links) {
            navLinks.push(
                <button key="last" onClick={this.handleNavLast} >&gt;&gt; Last</button>
            )
        }


        return (
            <div>
                <input ref="pageSizeRef" defaultValue={this.props.pageSize} onInput={this.handleInput}/>
                <table>
                    <tbody>
                    <tr>
                        <th>User ID</th>
                        <th>User First Name</th>
                        <th>User Last Name</th>
                    </tr>
                    {userSet}
                    </tbody>
                </table>
                <div>
                    {navLinks}
                </div>
            </div>
        )
    }
}

export default UserList;