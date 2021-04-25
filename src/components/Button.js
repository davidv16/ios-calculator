import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default function Button(props) {
  return (
    <View>
      <TouchableHighlight
        underlayColor={'#C9C9C9'}
        style={[
          styles.button,
          {
            backgroundColor: props.backgroundColor,
            justifyContent: 'center',
          }
        ]}
      >
        <View>
          {/* button text passed by props from HomeScreen */}
          <Text
            style={
              styles.text,
              {color: props.color}
            }
          >
            {props.text}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );

}

const styles = StyleSheet.create({
  button: {
    height: 76,
    width: 76,
    borderRadius: 38,
  },
  text: {
    textAlign: 'center',
    fontSize: 32,
  },
});