import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default function Button(props) {
  return (
    <View>
      {/* add styling from StyleSheet and pass background colors from HomeScreen */}
      {/* styles added from StyleSheet and text colors passed by props from HomeScreen */}
      {/* checks if button being used is the Large Zero one and renders
      different styling if so.  */}
      <TouchableHighlight
        style={[
          props.largeButton ? styles.largeButton : styles.button,
          {
            backgroundColor: props.backgroundColor,
            justifyContent: 'center',
          }
        ]}
      >
        <View>
          {/* button text passed by props from HomeScreen */}
          {/* styles added from StyleSheet and text colors passed by props from HomeScreen */}
          {/* checks if button being used is the Large Zero one and renders
          different styling if so.  */}
          <Text
            style={[
              props.largeButton ? styles.largeButtonText : styles.buttonText,
              {color: props.color},
            ]}
          >
            {props.text}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );

}

{/* Stylesheet for the buttons */}
{/* Size and radius styling for buttons and button text */}
{/* Special styling for the large Zero button and text */}
const styles = StyleSheet.create({
  button: {
    height: 76,
    width: 76,
    borderRadius: 38,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 32,
  },
  largeButton: {
    width: 170,
    height: 76,
    borderRadius: 38,
  },
  largeButtonText: {
    paddingLeft: 27,
    fontSize: 32,
  }
});