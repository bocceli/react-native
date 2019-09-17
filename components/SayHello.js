import React, {useState, Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
    FlatList,
} from 'react-native';

import MyStyles from '../mystyles/mystyles';

class SayHello extends Component {
    //Render: contents must be rendered, repared
    render() {
        return (
            // Returned value must always be just one parent element - here it is View -
            // and it can include none or more child elements
            // Returned value is the actual content to be shown on the screen
            // Here style is added as an inline style - see double curly braces
            <View style={{ alignItems: 'center' }}>
                {/* Here style is added from styles definition - only single curly braces */}
                <Text style={MyStyles.listitem}>Hello {this.props.name}! ({this.props.status})</Text>
                <Text style={MyStyles.listitem}>Hello {this.props.name}! ({this.props.status})</Text>
            </View>
        );
    }
}

export default SayHello;