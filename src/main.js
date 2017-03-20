import React, { Component } from 'react';
import {
    Navigator
} from 'react-native';

import signIn from './components/auth/signIn';
import signUp from './components/auth/signUp';
import chooseName from './components/auth/chooseName';

import topics from './components/topics';

const routes = {
    signIn,
    signUp,
    topics,
    chooseName
};

export default class Main extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{name: 'signIn'}}
                renderScene={this.renderScene}
            />
        )
    }

    renderScene(route, navigator) {
        let Component = routes[route.name];

        return (
            <Component
                navigator={navigator}
            />
        )
    }
}