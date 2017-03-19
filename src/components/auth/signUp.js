import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import styles from './../../styles';

export default class signUp extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state ={
            email: '',
            password: '',
            confirmPassword: ''
        };
    };

    render() {
        return (
            <View style={styles.container}>
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
                <TouchableOpacity style={styles.buttonContainer}>
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