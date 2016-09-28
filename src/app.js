import Ionic from 'ionic';
import Keyboard from 'cordova/keyboard';
import StatusBar from 'cordova/status-bar';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Chats } from 'api/collections';
import { Meteor } from 'meteor/meteor';

console.log('ECCOMIIIIIIIIIIII', Chats.find().count())

setTimeout(() => {
    console.log('ECCOMIIIIIIIIIIII', Chats.find().fetch())
}, 3000)

var HelloWorld = React.createClass({
    render: function() {
        Meteor.call('test', 'world', (err, msg)=> {
            console.log('server returned:' + msg);
        });
        return (
            <h1>Hello from {this.props.phrase}!</h1>
        );
    }
});


ReactDOM.render(
<HelloWorld phrase="ES6"/>,
    document.getElementById('render-target')
);

