import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//component that prints out the display on the calculator
export default function Display(props) {
  return (
    /* Prints out the outcome in the calc */
    <View>
      <Text style={styles.text}>
        {props.result}
      </Text>
    </View>
  );
}

/* styling for the outcome text */
const styles = StyleSheet.create({
  text: {
    margin: 20,
    marginBottom: 4,
    color:'white',
    textAlign: 'right',
    fontSize: 90,
  }
});