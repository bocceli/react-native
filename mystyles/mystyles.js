import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity } from 'react-native';

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

export default styles;