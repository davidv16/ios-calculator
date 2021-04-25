import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default function Button(props) {
  return (
    <View>
      <TouchableHighlight
        underlayColor={'#C9C9C9'}
        style={
          {backgroundColor: props.backgroundColor,
          justifyContent: 'center',}
        }
      >
        <View>
          <Text>
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