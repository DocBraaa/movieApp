import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default class Title extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            isShowingText: true
        }

        setInterval(() => {
            this.setState(previousState => (
                { isShowingText: !previousState.isShowingText }
            ))
        }, 200);
    }

    render() {
        if(this.state.isShowingText){
        return (

            <View>
                <Text style={this.props.style}>{this.props.title}</Text>
            </View>
        )} else return null;
    }

}