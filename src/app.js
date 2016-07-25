import Ionic from 'ionic';
import Keyboard from 'cordova/keyboard';
import StatusBar from 'cordova/status-bar';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


console.log('ECCOMIIIIIIIIIIII')

var HelloWorld = React.createClass({
    render: function() {
        return (
            <h1>Hello from {this.props.phrase}!</h1>
        );
    }
});


ReactDOM.render(
<HelloWorld phrase="ES6"/>,
    document.getElementById('render-target')
);

