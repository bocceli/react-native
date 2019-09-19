import React from 'react';
import {FlatList, ActivityIndicator, Text, View, StyleSheet, Button} from 'react-native';

export default class FetchExample extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            isLoading: true,
        };
    }

    componentDidMount () {
        // First we fetch from a URL
        return (
            fetch ('https://election-machine01-dot-mobile-app-01-251306.appspot.com/rest/election-machine/ems/get-candidates')
            // This returns a response, which we convert to json (response.json())
                .then (response => response.json ())
                // This json is given to next method where the parameter name is responseJson
                .then (responseJson => {
                    // In this method we set some state values
                    this.setState (
                        {
                            isLoading: false,
                            // Here we get the element (an array) movies of this JSON String
                            dataSource: responseJson,

                            // Here we get the actual JSON String
                            jsonString: JSON.stringify (responseJson),
                        },
                        function () {}
                    );
                })
                .catch (error => {
                    console.error (error);
                })
        );
    }

    getMovie = (id) => {
        console.log(this.state.dataSource.filter(movie => movie.id == id));
        return this.state.dataSource.filter(movie => movie.id == id);
    };

    render () {
        // If the value of state isLoading is 'false' we return Activityindicator
        // here returning means that we show ActivityIndicator on the screen
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }
        // Else we show the elemnts oj JSON in the screen

        return (
            <View style={{flex: 1, paddingTop: 20}}>
                {/* Here we show the actual JSON String to be able to demonstrate the situation */}

                {/* And the movies in a FlatList - scrollable list which is rendered only on the visible area*/}
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => (
                        <View style={styles.listItem}>
                            <Text>{item.candidateId}) {item.firstName} {item.lastName}, {item.politicalParty}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.candidateId+''}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    screen: {padding: 50},
    inputContainer: {
        flexDirection: 'row',
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