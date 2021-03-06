import React, { Component } from 'react';
import {
    Navigator
} from 'react-native';

import signIn from './components/auth/signIn';
import signUp from './components/auth/signUp';
import chooseName from './components/auth/chooseName';

import topics from './components/topics';
import topicDetail from './components/topic-detail';

const routes = {
    signIn,
    signUp,
    topics,
    topicDetail,
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
        let {displayName, title, author, row_uid} = route;

        return (
            <Component
                navigator={navigator}
                displayName={displayName}
                title={title}
                author={author}
                row_uid={row_uid}
            />
        )
    }
}