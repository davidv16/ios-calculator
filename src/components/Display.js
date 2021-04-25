import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Display(props) {
  return (
    <View>
      <Text style={styles.text}>
        {props.outcome}
      </Text>
    </View>
  );
}

/* styling for the outcome text */
const styles = StyleSheet.create({
  text: {
    color:'white',
    textAlign: 'right',
  }
});