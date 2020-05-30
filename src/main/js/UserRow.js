import React from 'react';
import UpdateUserDialog from "./UpdateUserDialog";

class UserRow extends React.Component{
    constructor(props){
        super(props);
        this.handleDelete= this.handleDelete.bind(this);
    }

    render() {
        return (
            <tr>
                <td>User ID : {this.props.user.entity.userId}</td>
                <td>{this.props.user.entity.firstName}</td>
                <td>{this.props.user.entity.lastName}</td>
                <td><UpdateUserDialog
                    user={this.props.user}
                    attributes={this.props.attributes}
                    onUpdate={this.props.onUpdate}/>
                </td>
                <td>
                    <button onClick={this.handleDelete}>Delete</button>
                </td>
    </tr>
        )
    }

    handleDelete() {
        this.props.onDelete(this.props.user)
    }
}

export default UserRow;