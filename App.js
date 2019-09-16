import React, {Component} from 'react';
import {Alert, Text, View, TextInput, Button} from 'react-native';
import set from "@babel/runtime/helpers/esm/set";


/*
state is like components attributes - they can be used inside the component, but not outside.
Notice that setting prevalues to state attributes, you do as in the constructor.
When changin the value of the state, you use setState method.
Every time you change the value, screen is rendered - meaning, new values are set visible.

And again... take a good look at what is shown on the screen - nothing else but what is returned
*/
export default class App extends Component {
    state = {
        enteredNumberOne: Number,
        enteredNumberTwo: Number,
        result: Number | undefined,
    };

    //Constructor is not needed. Values can be set above where only types are set.
    constructor() {
        super(); //super must be called first
        this.state = {};
    }

    calculate = (operation) => {
        let result = 0;
        switch (operation) {
            case '+':
                result = this.state.enteredNumberOne + this.state.enteredNumberTwo;
                break;
            case '-':
                result = this.state.enteredNumberOne - this.state.enteredNumberTwo;
                break;
            case '*':
                result = this.state.enteredNumberOne * this.state.enteredNumberTwo;
                break;
            case '/':
                result = this.state.enteredNumberOne / this.state.enteredNumberTwo;
                break;
        }
        console.log(this.state.enteredNumberOne);
        console.log(this.state.enteredNumberOne + ' ' + operation + ' ' + this.state.enteredNumberTwo + ' = ' + result);
        this.setState({
            result: result,
        })
    };

    render() {
        return (
            <View>
                <TextInput placeholder={"First number"} keyboardType={"numeric"}
                           onChangeText={(text) => this.setState({enteredNumberOne: Number(text)})}/>
                <TextInput placeholder={"Second number"} keyboardType={"numeric"}
                           onChangeText={(text) => this.setState({enteredNumberTwo: Number(text)})}/>

                <Button title="+" onPress={() => this.calculate('+')}/>
                <Button title="-" onPress={() => this.calculate('-')}/>
                <Button title="*" onPress={() => this.calculate('*')}/>
                <Button title="/" onPress={() => this.calculate('/')}/>

                <TextInput placeholder={"Result"} readonly={true}
                           value={this.state.result && this.state.result + ''}/>
            </View>
        );
        /*
        If we did not use bind, the last function call could be written
        <Text onPress={()=>this.updateYourState()}> {this.state.yourState} </Text>
        And this also makes the bind - gives the this-object to the method
        */
    }
}