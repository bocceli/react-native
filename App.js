/*
Imports coming from react and react-native
*/

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

/*
Properties (props for short) are properties of an element and they can have different values.
As in HTML we have an element <img> which must have a property src, which should have
a hyper reference as its value to an image: src='http://someplace.sp/someimage.png'
In React Native there is no such element as img and property src - these would be selfmade expressions.
See: https://facebook.github.io/react-native/docs/props

Event handling properties as onPress are also properties of the elements, not only the
properties which have some static (or not) value.
*/


/*
Component, which is NOT the starting point: this is not exported as default in this App.js
This can be included in other components - see below.
Note: Component's name is SayHello and component is used (included) by referring to its name
*/
class SayHello extends Component {
  //Render: contents must be rendered, repared
  render() {
    return (
        // Returned value must always be just one parent element - here it is View -
        // and it can include none or more child elements
        // Returned value is the actual content to be shown on the screen
        // Here style is added as an inline style - see double curly braces
        <View style={{ alignItems: 'center' }}>
          {/* Here style is added from styles definition - only single curly braces */}
          <Text style={MyStyles.listitem}>Hello {this.props.name}! ({this.props.manufacturer}) ({this.props.price})</Text>
        </View>
    );
  }
}

/*
This component is the starting point - default exported component in file App.js
*/
class LotsOfGreetings extends Component {
  render() {
    return (
        <View style={{ alignItems: 'center', top: 50 }}>
          <Text style={MyStyles.header}>'Some tools' of Bocceli_</Text>
          {/* Here we add component SayHello several times */}
          {/* All of these four lines insert component SayHello (see above), */}
          {/* which includes one View element containing one Text element. */}
          {/* Here name and status are properties of element SayHello */}
          {/* and values are printed with statement {this.props.name} and {this.props.status} */}
          {/* Properties are a bit like method's parameters, where method is component SayHello */}
          {/* and method call is the included element*/}
          <SayHello name='Wrench' price={"100€"} manufacturer={"Fiskars"} />
          <SayHello name='Screwdriver' price={"50€"} manufacturer={"Bla"} />
          <SayHello name='Mouse' price={"13€"} manufacturer={"Microsoft"} />
          <SayHello name='Keyboard' price={"150€"} manufacturer={"Logitech"} />
        </View>
    );
  }
  /*You can think that SayHello elements above are the View elements of component SayHello
      <View style={{alignItems: 'center'}}>
        <Text>Hello Juhani!</Text>
      </View>
      And the other guys the same way
  */
}

//Styles are created like this
const MyStyles=StyleSheet.create({
  header:{fontSize:20, fontWeight:"bold", color:"#abc"},
  listitem:{
    color:"black"
  }
});

export default LotsOfGreetings;