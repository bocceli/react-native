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

import styles from './mystyles/styles';
import GamiItem from './components/GamiItem';

/*
This example does not use Components - this is a function type application
At least one good thing that now we have our 'states' available
without binding
*/


/* This variable is to be the index of added games*/
var lkm=0;

export default function App () {
    const [enteredGame, setEnteredGame] = useState (''); //This is a normal state
    const [huntedGames, setHuntedGames] = useState ([]); //This an array of states, where we can add elements

    function gameInputHandler (enteredText) {
        setEnteredGame (enteredText);
    }

    const addGameHandler = () => {
        lkm++;
        // keyValue: if just key, we do not need keyExtractor - see FlatList below
        setHuntedGames (currentGames => [
            ...currentGames,
            {keyValue: lkm.toString(), theValue: enteredGame},
            // {keyValue: (Math.floor(100*Math.random()+1)).toString(), theValue: enteredGame}, //Not good - random can happen twice or mere times
        ]);
        // Adding in the end would be setHuntedGames (currentGames => [ ...currentGames, enteredGame]);
    };
    return (
        <View style={styles.screen}>
            <Text>Add games into FlatList</Text>
            <View style={styles.inputContainer}>
                {/* Next line: do not put gameInputHandler() - that would run the function on load */}
                <TextInput
                    placeholder="Some text"
                    style={styles.input}
                    onChangeText={gameInputHandler}
                    value={enteredGame}
                />
                {/* Next line: do not put braces (not: addGameHandler()) - see previous comment*/}
                <Button title="ADD Game" onPress={addGameHandler} />
            </View>
            {/* Only the visible area is rendered when using Flatlist - so more efficient in some cases */}
            {/* FlatList also needs a key - here we need the KeyEtarctor, because we are not usin 'key' as a key, but 'keyValue' */}
            <FlatList
                keyExtractor={(aitem) => aitem.keyValue}
                data={huntedGames}
                renderItem={itemiData => <GamiItem myKey={itemiData.item.keyValue} myValue={itemiData.item.theValue} />}
            />
        </View>
    );
}

