import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyClUnq02RAU4FVVv7uoePxLGAEGqAZnXXE",
    authDomain: "topicwhiz-91e87.firebaseapp.com",
    databaseURL: "https://topicwhiz-91e87.firebaseio.com",
    storageBucket: "topicwhiz-91e87.appspot.com",
    messagingSenderId: "472750339536"
};

export const firebaseApp = firebase.initializeApp(config);
export const topicsRef = firebase.database().ref();