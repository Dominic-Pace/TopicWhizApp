import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
        backgroundColor: '#fff'
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
    },

    error: {
        color: 'red',
        textAlign: 'center'
    }
});