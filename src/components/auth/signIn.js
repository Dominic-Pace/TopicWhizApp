import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class signIn extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state ={
            email: '',
            password: ''
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
                />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.button}>Sign In</Text>
                </TouchableOpacity>
                <View style={styles.links}>
                    <TouchableOpacity>
                        <Text style={styles.link}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigator.push({name: 'signUp'})
                        }}>
                        <Text style={styles.link}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40
    },

    input: {
        height: 50,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        margin: 2,
        textAlign: 'center'
    },

    buttonContainer: {
        justifyContent: 'center',
        height: 50,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        margin: 2
    },

    button: {
        textAlign: 'center'
    },

    links: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    link: {
        color: '#0000ff'
    }
})