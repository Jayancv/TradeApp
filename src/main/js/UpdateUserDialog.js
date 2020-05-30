import React from 'react';
import ReactDOM from 'react-dom';

class UpdateUserDialog extends React.Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const updatedUser = {};
        this.props.attributes.forEach(att => {
            updatedUser[att] = ReactDOM.findDOMNode(this.refs[att]).value.trim();
        });
        this.props.onUpdate(this.props.user, updatedUser);
        window.location = "#";

    }

    render() {
        const inputs = this.props.attributes.map(att =>
            <p key={att}>
                <input key={att}
                    type="text"
                       placeholder={att}
                       ref={att}
                       defaultValue={this.props.user.entity[att]}
                       className="field" />
            </p>
        );
        const dialogId = "updateUser-" + this.props.user.entity._links.self.href;

        return (
            <div key={this.props.user.entity._links.self.href}>
                <a href={"#"+dialogId}>Update User</a>
                <div id={dialogId} className="modalDialog">
                    <div>
                        <a href="#" title="Close" className="close">X</a>
                        <h2>Update user</h2>

                        <form>
                            {inputs}
                            <button onClick={this.handleSubmit}>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default UpdateUserDialog;