import React, {Component} from "react";
import {TextInput} from "react-native";


type ResultTextInputProps = {
    placeholder: string,
    value: string
};

class ResultTextInput extends Component<ResultTextInputProps> {
    render() {
        return <TextInput placeholder={this.props.placeholder} readonly={true}
                          value={this.props.value}/>
    }
}

export default ResultTextInput