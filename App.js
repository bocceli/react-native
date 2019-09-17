import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
    FlatList,
} from 'react-native';

/*
This example does not use Components - this is a function type application
At least one good thing that now we have our 'states' available
without binding
*/


/* This variable is to be the index of added games*/
var lkm=0;

export default function App () {
    const [enteredFirstname, setEnteredFirstname] = useState ('');
    const [enteredLastname, setEnteredLastname] = useState ('');

    const [fullname, setFullname] = useState([]);

    const firstnameInputHandler = (firstname) => {
        setEnteredFirstname(firstname)
    };

    const lastnameInputHandler = (lastname) => {
        setEnteredLastname(lastname)
    };

    const addNameHandler = () => {
        lkm++;
        setFullname(currentFullnames => [...currentFullnames,
            {keyValue: lkm.toString(), theFirstname: enteredFirstname, theLastname: enteredLastname}
            ]);
        // Adding in the end would be setHuntedGames (currentGames => [ ...currentGames, enteredGame]);
    };
    return (
        <View style={styles.screen}>
            <Text>Add names into FlatList</Text>
            <View style={styles.inputContainer}>
                {/* Next line: do not put gameInputHandler() - that would run the function on load */}
                <TextInput
                    placeholder="First name"
                    style={styles.input}
                    onChangeText={firstnameInputHandler}
                    value={enteredFirstname}
                />
                <TextInput
                    placeholder="Last name"
                    style={styles.input}
                    onChangeText={lastnameInputHandler}
                    value={enteredLastname}
                />
                {/* Next line: do not put braces (not: addGameHandler()) - see previous comment*/}
                <Button title="ADD Name" onPress={addNameHandler} />
            </View>
            {/* Only the visible area is rendered when using Flatlist - so more efficient in some cases */}
            {/* FlatList also needs a key - here we need the KeyEtarctor, because we are not usin 'key' as a key, but 'keyValue' */}
            <FlatList
                keyExtractor={(aitem) => aitem.keyValue}
                data={fullname}
                renderItem={itemsData => (
                    <View style={styles.listItem}>
                        <Text>Items {itemsData.item.keyValue}).. {itemsData.item.theFirstname} {itemsData.item.theLastname}</Text>
                    </View>
                )}
            />
        </View>
    );
}


const styles = StyleSheet.create ({
    screen: {padding: 50},
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {width: '80%', borderColor: 'green', borderWidth: 2, padding: 10},
    listItem: {
        padding: 10,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: '#0f0',
        backgroundColor: '#fce',
    },
});