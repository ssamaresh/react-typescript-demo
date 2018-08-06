import * as React from 'react';
import UserInterface from './UserInterface';

export default class UserComponent extends React.Component<UserInterface, {}> {

    render() {
        return (
            <div>
                <h2>User Component</h2>
                <div>Hello { this.props.name }</div>
                <div>You are { this.props.age } years old.</div>
                <div> Your date of birth is { this.props.dob.toDateString() }.</div>
                <div>You live in { this.props.address }</div>
            </div>
        );
    }

};