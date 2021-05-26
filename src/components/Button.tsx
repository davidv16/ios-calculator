import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';

//destructured width properties from the devices window size for use in the large zero button width
const { width: WIDTH } = Dimensions.get('window');

interface Props {
  backgroundColor: string
  color?: string
  text?: string
  function: any
  orange?: boolean
  largeButton?: boolean
  children?: any
}

export default function Button(props: Props) {
  return (
    <View>
      {/* add styling from StyleSheet and pass background colors from HomeScreen */}
      {/* styles added from StyleSheet and text colors passed by props from HomeScreen */}
      {/* checks if button being used is the Large Zero one and renders
      different styling if so.  */}
      <TouchableHighlight
        underlayColor={props.orange ? '#ffc56b' : '#c9c9c9'}
        onPress={props.function}
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
          {/* to check if there are any children icons being passed down instead of text */}
          {/* in our case the operator icons replace the text */}
          {props.children ? (
            props.children
          ) : (
            <Text
              style={[
                props.largeButton ? styles.largeButtonText : styles.buttonText,
                { color: props.color },
              ]}
            >
              {props.text}
            </Text>
          )}
        </View>
      </TouchableHighlight>
    </View>
  );

}

{/* Stylesheet for the buttons */ }
const styles = StyleSheet.create({
  //styling for all the buttons
  button: {
    height: 76,
    width: 76,
    borderRadius: 38,
  },
  //styling for the button text
  buttonText: {
    textAlign: 'center',
    fontSize: 32,
  },
  //styling for the large zero button
  largeButton: {
    width: (WIDTH - 4 * 76) / 5 + 2 * 76,
    height: 76,
    borderRadius: 38,
  },
  //styling for the text in the large zero button
  largeButtonText: {
    paddingLeft: 27,
    fontSize: 32,
  }
});