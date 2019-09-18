import React, {Component} from "react";
import {Button} from "react-native";
import styles from "../styles/styles";

type SignButtonProps = {
    title: string,
    onPress: function
};

class SignButton extends Component<SignButtonProps>{
    render() {
        return <Button title={this.props.title} onPress={this.props.onPress}/>
    }
}

export default SignButton