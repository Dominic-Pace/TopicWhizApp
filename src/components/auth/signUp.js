import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import styles from './../../styles';
import {firebaseApp} from './authentication'

export default class signUp extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state ={
            email: '',
            password: '',
            confirmPassword: '',
            result: ''
        };
    };

    signUp() {
        if(this.state.password == this.state.confirmPassword) {
            let {email, password} = this.state;
            firebaseApp.auth().createUserWithEmailAndPassword(email, password)
                .catch(error => this.setState({result: error.message}))
        } else {
            this.setState({result: 'The Password and Confirm Password fields must match.'})
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>{this.state.result}</Text>
                <TextInput
                    placeholder='Email'
                    style={styles.input}
                    onChangeText={(text) => this.setState({email: text})}
                />

                <TextInput
                    placeholder='Password'
                    style={styles.input}
                    onChangeText={(text) => this.setState({password: text})}
                    secureTextEntry={true}
                />

                <TextInput
                    placeholder='Confirm Password'
                    style={styles.input}
                    onChangeText={(text) => this.setState({confirmPassword: text})}
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => this.signUp()}
                >
                    <Text style={styles.button}>Sign Up</Text>
                </TouchableOpacity>

                <View style={styles.links}>
                    <TouchableOpacity onPress={() => this.props.navigator.pop()}>
                        <Text style={styles.link}>Already a member? Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}