import * as React from 'react';
import UserComponent from './user-component';


let logo = 'https://cdn-images-1.medium.com/max/1600/1*x6EnTlBhjcyu605VPDysZQ.jpeg';

export default class ContainerComponent extends React.Component <{}> {

    render() {
        return (
            <div>
                <img src = { logo } alt = 'Logo' />
                <UserComponent
                    name = 'John'
                    age = { 25 }
                    address = 'Boston, MA'
                    dob = { new Date() }
                />
            </div>
        );
    }
};
