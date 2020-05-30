import React from 'react';
import ReactDOM from 'react-dom';

class AddUserDialog extends React.Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const newUser = {};

        this.props.attributes.forEach(att => {
            newUser[att] = ReactDOM.findDOMNode(this.refs[att]).value.trim();
        });
        this.props.onCreate(newUser);
        this.props.attributes.forEach(att => {
            ReactDOM.findDOMNode(this.refs[att]).value = '';
        });

        window.location = "#";

    }

    render() {
        const inputs = this.props.attributes.map(att =>
            <p key={att}>
                <input type="text" placeholder={att} ref={att} className="field"/>
            </p>
        );

        return (
            <div>
                <a href="#createUser">Add User</a>
                <div id="createUser" className="modalDialog">
                    <div>
                        <a href="#" title="Close" className="close">X</a>
                        <h2>Add new user</h2>

                        <form>
                            {inputs}
                            <button onClick={this.handleSubmit}>Add</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default AddUserDialog;