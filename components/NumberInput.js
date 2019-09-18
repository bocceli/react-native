import React, {Component} from "react";
import {TextInput} from "react-native";
import {string} from "prop-types";

type NumberInputProps = {
    placeholder: string,
    onChangeText: function
};

class NumberInput extends Component<NumberInputProps> {

    //Render: Component contents must be rendered
    render() {
        return (
            <TextInput placeholder={this.props.placeholder} keyboardType={"numeric"}
                       onChangeText={this.props.onChangeText}/>
        );
    }
}

export default NumberInput;