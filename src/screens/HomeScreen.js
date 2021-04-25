import React from "react";
import { View, StyleSheet } from "react-native";

//components import 
import Button from '../components/Button';
import Display from "../components/Display";



export const HomeScreen = () => {
  return (
    /* Main container for the app */
    /* row styling from the StyleSheet below */
    <View style={styles.container}>
      
      {/* Display component to render the outcome from the calc */}
      <Display outcome='0'/>

      {/* first row of buttons */}
      {/*   AC       +/-       %       /   */}
      {/* row styling from StyleSheet below */}
      <View style={styles.row}>
        {/* Buttons and props passed down to button component */}
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
          backgroundColor='#FF9404'
          color='white'
          text="÷"
        />
      </View>

      {/* second row of buttons */}
      {/*   7       8       9       x   */}
      <View style={styles.row}>
        {/* Buttons and props passed down to button component */}
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
          backgroundColor='#FF9E0C'
          color="white"
          text="x"
        >
        </Button>
      </View>

      {/* third row of buttons */}
      {/*   4       5       6       -   */}
      <View style={styles.row}>
        {/* Buttons and props passed down to button component */}
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
          backgroundColor='#FF9E0C'
          color="white"
          text="-"
        >
        </Button>
      </View>

      {/* fourth row of buttons */}
      {/*   1       2       3       +   */}
      <View style={styles.row}>
        {/* Buttons and props passed down to button component */}
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
          backgroundColor='#FF9E0C'
          color="white"
          text="+"
        >
          
        </Button>
      </View>

      {/* fifth row of buttons */}
      {/*   0       .       =   */}
      <View style={styles.row}>
        {/* Buttons and props passed down to button component */}
        <Button
          largeButton
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
          backgroundColor="#FF9E0C"
          color="white"
          text="="
        />
      </View>
    </View>
  );
};


/* Styles for the home screen */
const styles = StyleSheet.create({
  //styling for the main container
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    padding: 10,
    paddingBottom: 14,
  },
  //Styling for the rows of buttons
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 7,
  }
});
