//import Ionic from 'ionic';
//import Keyboard from 'cordova/keyboard';
//import StatusBar from 'cordova/status-bar';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { Chats } from 'api/collections';
//import { Meteor } from 'meteor/meteor';

//import styles from './app.scss'
import Hello from './hello';

const TARGET_ID = 'render-target';

document.body.style.color = 'blue';

//Meteor.autorun(() => {
//    let {status} = Meteor.status();
//
//    if(status === 'connecting') {
//        document.getElementById(TARGET_ID).style.color = 'yellow';
//    }
//    else if (status === 'connected') {
//        document.getElementById(TARGET_ID).style.color = 'green';
//        console.log('TEST2', Meteor.status().status, Chats.find().count())
//    }
//});
//console.log('ECCOMIIIIIIIIIIII', Chats.find().count())
//
//setTimeout(() => {
//    console.log('ECCOMIIIIIIIIIIII', Chats.find().fetch())
//}, 3000)

//var HelloWorld = React.createClass({
//    render: function() {
//        Meteor.call('test', 'world', (err, msg)=> {
//            console.log('server returned:' + msg);
//        });
//        return (
//            <h1>Hello from <span className={styles.test} > {this.props.phrase}! </span></h1>
//        );
//    }
//});


ReactDOM.render(
<Hello phrase="ES6"/>,
    document.getElementById(TARGET_ID)
);

