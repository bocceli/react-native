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

import SayHello from './SayHello';
import styles from '../mystyles/styles';


// There are several ways to write components

// Number 1: function with arrow =>
//Here the parameters are coming with argument propss (or any name you wish)

// const GamiItem = propss => {
// ***Render: No render, just return
//   return (
//     <View style={styles.listItem}>
//       <Text>propss: {propss.myKey}).  {propss.myValue}</Text>
//       <SayHello name="Taavi" status="Tietäjä" />
//     </View>
//  );
// };

//Number 2: normal function
//Here the paramaters are coming with argument properties (or any name you wish)
// function GamiItem(properties) {
// ***Render: No render, just return
//   return (
//     <View style={styles.listItem}>
//       <Text>f-p: {properties.myKey}).  {properties.myValue}</Text>
//       <SayHello name="Taavi" status="Tietäjä" />
//     </View>
//  );
// };

//Number 3: Component
//Here the paramaters are coming with props - must be 'this.props'

class GamiItem extends Component {
    //Render: Component contents must be rendered
    render () {
        return (
            <View style={styles.listItem}>
                <Text>this.props: {this.props.myKey}). {this.props.myValue}</Text>
                <SayHello name="Taavi" status="Tietäjä" />
            </View>
        );
    }
}

export default GamiItem;