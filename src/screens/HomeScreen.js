import React from "react";
import { View, StyleSheet } from "react-native";

//components import 
import Button from '../components/Button';



export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* first row of buttons */}
      {/*   AC       +/-       %       /   */}
      <View style={styles.row}>
        <Button
          backgroundColor="#A5A5A5"
          color="black"
          text={'AC'}
        />
        <Button
          backgroundColor="#A5A5A5"
          color="black"
          text="+/-"
        />
        <Button
          backgroundColor="#A5A5A5"
          color="black"
          text="%"
        />
        <Button
          orange
          backgroundColor='#FF9404'
          color='white'
          text="÷"
        />
      </View>

      {/* second row of buttons */}
      {/*   7       8       9       x   */}
      <View style={styles.row}>
        <Button
          backgroundColor="#333333"
          color="white"
          text="7"
        />
        <Button
          backgroundColor="#333333"
          color="white"
          text="8"
        />
        <Button
          backgroundColor="#333333"
          color="white"
          text="9"
        />
        <Button
          orange
          backgroundColor='#FF9E0C'
          color="white"
          text="x"
        >
        </Button>
      </View>

      {/* third row of buttons */}
      {/*   4       5       6       -   */}
      <View style={styles.row}>
        <Button
          backgroundColor="#333333"
          color="white"
          text="4"
        />
        <Button
          backgroundColor="#333333"
          color="white"
          text="5"
        />
        <Button
          backgroundColor="#333333"
          color="white"
          text="6"
        />
        <Button
          orange
          backgroundColor='#FF9E0C'
          color="white"
          text="-"
        >
        </Button>
      </View>

      {/* fourth row of buttons */}
      {/*   1       2       3       +   */}
      <View style={styles.row}>
        <Button
          backgroundColor="#333333"
          color="white"
          text="1"
        />
        <Button
          backgroundColor="#333333"
          color="white"
          text="2"
        />
        <Button
          backgroundColor="#333333"
          color="white"
          text="3"
        />
        <Button
          orange
          backgroundColor='#FF9E0C'
          color="white"
          text="+"
        >
          
        </Button>
      </View>

      {/* fifth row of buttons */}
      {/*   0       .       =   */}
      <View style={styles.row}>
        <Button
          special
          backgroundColor="#333333"
          color="white"
          text="0"
        />
        <Button
          backgroundColor="#333333"
          color="white"
          text="."
        />
        <Button
          orange
          backgroundColor="#FF9E0C"
          color="white"
          text="="
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    padding: 10,
    paddingBottom: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 7,
  },
  icon: {
    textAlign: 'center'
  },
});
