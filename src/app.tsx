import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ContainerComponent from './container-component';

ReactDOM.render(
    <div>
        <h1> Welcome to React and Typescript</h1>
        <ContainerComponent/>
    </div>,
    document.getElementById('root')
);