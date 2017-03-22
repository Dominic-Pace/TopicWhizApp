import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    ListView,
    TouchableOpacity
} from 'react-native';

import styles from './../styles';
import {firebaseApp, topicsRef} from './auth/authentication';
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2 });

export default class topics extends Component {

    constructor(props, context) {
        super(props, context);
        this.state ={
            displayName: '',
            title: '',
            dataSource: ds.cloneWithRows([{
                title: '',
                author: ''

            }])
        }
    }

    componentDidMount() {
        let user = firebaseApp.auth().currentUser;

        if (!user.displayName) {
            this.props.navigator.push({name: 'chooseName'});

        } else {
            this.setState({displayName: user.displayName})

            this.listenForItems(topicsRef);
        }
    }

    listenForItems(ref) {
        ref.on('value', (snap) => {
            let topics = [];
            snap.forEach(topic => {
                topics.push({
                    title: topic.val().title,
                    author: topic.val().author,
                    key: topic.key
                })
            });
            this.setState({dataSource: ds.cloneWithRows(topics)});
        })
    }

    signOut() {
        // sign out the user
        firebaseApp.auth().signOut()
            .then(() => {
                // Sign out successful
                this.props.navigator.popToTop();
            }, (error) => {
                console.log(error);
            })
    }

    details(data) {
        this.props.navigator.push({
            name: 'topicDetail',
            displayName: this.state.displayName,

            title: data.title,
            author: data.author,

            row_uid: data.key
        })
    }

    renderRow(rowData) {
        return (
            <TouchableOpacity
                style={styles.row}
                onPress={() => this.details(rowData)}
            >
                <Text style={styles.rowTitle}>
                    {rowData.title}
                </Text>

                <Text>
                    {rowData.author}
                </Text>
            </TouchableOpacity>
        )
    }

    addTopic() {
        topicsRef.push({
            title: this.state.title,
            author: this.state.displayName
        })
    }

    render() {
        return (
            <View style={styles.flexContainer}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => this.signOut()}
                    >
                        <Text style={styles.link}>Sign Out</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>
                        {this.state.displayName}

                    </Text>

                </View>
                <View style={styles.body}>
                    <TextInput
                        placeholder='Something on your mind?'
                        style={styles.input}
                        onChangeText={(text) => this.setState({title: text})}
                        onEndEditing={() => this.addTopic()}
                    />

                    <ListView
                        style={styles.list}
                        enableEmptySections={true}
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => this.renderRow(rowData)}
                    />
                </View>
            </View>
        )
    }
}