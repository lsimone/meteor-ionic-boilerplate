//import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import styles from './app.scss'

export default class HelloWorld extends Component {
    render() {
        //Meteor.call('test', 'world', (err, msg)=> {
        //    console.log('server returned:' + msg);
        //});
        return (
            <h1>Hello from <span className={styles.test} > ES6! </span></h1>
        );
    }
}
