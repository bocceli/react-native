import React, {Component} from 'react';
import {Alert, Text, View} from 'react-native';


/*
state is like components attributes - they can be used inside the component, but not outside.
Notice that setting prevalues to state attributes, you do as in the constructor.
When changin the value of the state, you use setState method.
Every time you change the value, screen is rendered - meaning, new values are set visible.

And again... take a good look at what is shown on the screen - nothing else but what is returned
*/
export default class App extends Component {
  state = {
    myState: String,
    yourState: String,
    myStateChanged: Boolean,
    yourStateChanged: Boolean,
  };

  //Constructor is not needed. Values can be set above where only types are set.
  constructor () {
    super (); //super must be called first
    this.state = {
      myState: 'I am at school',
      yourState: 'You are on a holiday',
      herState: 'She is abroad',
      myStateChanged: false,
      yourStateChanged: false,
      herStateChanged: false,
    };
    //function needs to be bound if written in 'normal' way AND using state 
    // - actually because we are using "this" -object. this object is used in the method meaning this App object.
    //this.updateYourState = this.updateYourState.bind (this);
    //Arrow-type function is newer way and does not need a bind - object 'this' is already bound.
    // this.updateMyState = this.updateMyState.bind (this);
  }


  /*
Function written in arrow format - there is no need to bind. 
Compare to method updateYourState
*/
  updateMyState = () => {
    const {myStateChanged} = this.state;
    if (myStateChanged) {
      this.setState ({
        myState: 'I am at school',
        myStateChanged: false,
      });
    } else {
      this.setState ({
        myState: 'I am at home',
        myStateChanged: true,
      });
    }
  };
  updateYourState = () => {
    if (this.state.yourStateChanged) {
      this.setState ({
        //refers to class's state
        yourState: 'You are on a holiday',
        yourStateChanged: false,
      });
    } else {
      this.setState ({
        //refers to class's state
        yourState: 'You are at work',
        yourStateChanged: true,
      });
    }
  };
  updateHerState = () => {
    if (this.state.herStateChanged) {
      this.setState ({
        //refers to class's state
        herState: 'She is abroad',
        herStateChanged: false,
      });
    } else {
      this.setState ({
        //refers to class's state
        herState: 'She is shopping',
        herStateChanged: true,
      });
    }
  };
  /*
This is what we see - the render part
In Text elements there are method calls which happen when the element is clicked
*/

  render () {
    return (
        <View>
          <Text onPress={this.updateMyState}> {this.state.myState} </Text>
          <Text onPress={this.updateYourState}> {this.state.yourState} </Text>
          <Text onPress={this.updateHerState}> {this.state.herState} </Text>
        </View>
    );
    /*
    If we did not use bind, the last function call could be written
    <Text onPress={()=>this.updateYourState()}> {this.state.yourState} </Text>
    And this also makes the bind - gives the this-object to the method
    */
  }
}