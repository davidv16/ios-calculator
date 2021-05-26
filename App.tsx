import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

// components import
import Button from './src/components/Button';
import Display from './src/components/Display';

let numValueA: number;
let numValueB: number;
let outcome: number;

export default function App() {
  // initial state get/set of numbers on the screen
  // starts with zero
  const [resultDisplay, setResultDisplay] = useState<number | string>(0);
  // initial state of get/set operator
  // starts with an empty string
  const [operator, setOperator] = useState('');

  /* Methods */

  /**
   * @function clearButton to clear the screen
   * triggered by the AC and C buttons
   */
  function clearButton() {
    // if the current state is not zero
    if (!(resultDisplay === 0)) {
      // reset the selected operator
      setOperator('');
    }
    // Set the display back to zero
    setResultDisplay(0);
  }

  /**
   * @function invertButton to handle the +/- button calls
   */
  function invertButton() {
    // sets the display to a negative number
    setResultDisplay(Number(resultDisplay) * -1);
  }

  /**
   * @function precentButton to handle the % button calls
   */
  function precentButton() {
    // divides the current number set by 100
    // making it a precentage of 100
    setResultDisplay(Number(resultDisplay) / 100);
  }

  /**
   * @function operatorButtons to handle selected operator
   * @param {string} operator, takes in the operator as a string
   */
  const operatorButtons = (selectedOperator) => {
    // store the current value on the display to a global variable
    numValueA = Number(resultDisplay);
    // clear the display
    // and set the operator to the selected operator
    setResultDisplay(0);
    setOperator(selectedOperator);
  };

  /**
   * @function addIntToDisplay to add new numbers to the display
   * @param {string} newNum
   * triggered when a number is pressed
   */
  function addIntToDisplay(newNum) {
    // checks if the new number should be added to the number
    // array on the screen or replace it.
    // if the number on the display is not zero
    if (!(resultDisplay === 0)) {
      // then add the incoming number to the row of numbers on the display
      setResultDisplay(resultDisplay + newNum);
    } else {
      // otherwise replace the zero with the incoming number
      setResultDisplay(newNum);
    }
  }

  /**
   * @function dotButton to add a decimal dot to the display
   * triggered by the dot button
   */
  function dotButton() {
    // if there is not a dot on the screen
    if (Math.round(Number(resultDisplay)) === Number(resultDisplay)) {
      // then add one after the current number set
      setResultDisplay(`${resultDisplay}.`);
    }
  }

  /**
   * @function resultButton to handle the calculations
   * triggered by the equal button
   */
  function resultButton() {
    // checks the current operator
    switch (operator) {
      // if division is selected
      case 'division':
        // store the new number set on the display to a global variable
        numValueB = Number(resultDisplay);
        // runs the calculation
        outcome = numValueA / numValueB;
        // sets the new result to the outcome whith max 5 decimals
        setResultDisplay(+outcome.toFixed(5));
        // and resets the operator
        setOperator('');
        break;
      // if multiplication is selected
      case 'multiplication':
        numValueB = Number(resultDisplay);
        outcome = numValueA * numValueB;
        // sets the new result to the outcome whith max 5 decimals
        setResultDisplay(+outcome.toFixed(5));
        // and resets the operator
        setOperator('');
        break;
      // if subtraction is selected
      case 'subtraction':
        numValueB = Number(resultDisplay);
        outcome = numValueA - numValueB;
        // sets the new result to the outcome whith max 5 decimals
        setResultDisplay(outcome);
        // and resets the operator
        setOperator('');
        break;
      case 'addition':
        numValueB = Number(resultDisplay);
        outcome = numValueA + numValueB;
        // sets the new result to the outcome whith max 5 decimals
        setResultDisplay(+outcome.toFixed(5));
        // and resets the operator
        setOperator('');
        break;
      default:
        return null;
    }
  }

  /* View */
  return (
    /* Main container for the app */
    /* row styling from the StyleSheet below */
    <View style={styles.container}>
      {/* Display component to render the outcome from the calc */}
      <Display result={resultDisplay} />

      {/* first row of buttons */}
      {/*   AC       +/-       %       /   */}
      {/* row styling from StyleSheet below */}
      <View style={styles.row}>
        {/* Buttons and props passed down to button component */}
        <Button
          backgroundColor="#A5A5A5"
          color="black"
          text={resultDisplay ? 'C' : 'AC'}
          function={() => clearButton()}
        />
        <Button
          backgroundColor="#A5A5A5"
          color="black"
          text="+/-"
          function={() => invertButton()}
        />
        <Button
          backgroundColor="#A5A5A5"
          color="black"
          text="%"
          function={() => precentButton()}
        />
        <Button
          backgroundColor={operator === 'division' ? 'white' : '#FF9E0C'}
          color={operator === 'division' ? '#FF9E0C' : 'white'}
          text="÷"
          function={() => operatorButtons('division')}
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
          function={() => addIntToDisplay('7')}
        />
        <Button
          backgroundColor="#333333"
          color="white"
          text="8"
          function={() => addIntToDisplay('8')}
        />
        <Button
          backgroundColor="#333333"
          color="white"
          text="9"
          function={() => addIntToDisplay('9')}
        />
        <Button
          orange
          backgroundColor={operator === 'multiplication' ? 'white' : '#FF9E0C'}
          function={() => operatorButtons('multiplication')}
        >
          <Feather
            name="x"
            size={25}
            color={operator === 'multiplication' ? '#FF9E0C' : 'white'}
            style={styles.icon}
          />
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
          function={() => addIntToDisplay('4')}
        />
        <Button
          backgroundColor="#333333"
          color="white"
          text="5"
          function={() => addIntToDisplay('5')}
        />
        <Button
          backgroundColor="#333333"
          color="white"
          text="6"
          function={() => addIntToDisplay('6')}
        />
        <Button
          orange
          backgroundColor={operator === 'subtraction' ? 'white' : '#FF9E0C'}
          function={() => operatorButtons('subtraction')}
        >
          <Feather
            name="minus"
            size={25}
            color={operator === 'subtraction' ? '#FF9E0C' : 'white'}
            style={styles.icon}
          />
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
          function={() => addIntToDisplay('1')}
        />
        <Button
          backgroundColor="#333333"
          color="white"
          text="2"
          function={() => addIntToDisplay('2')}
        />
        <Button
          backgroundColor="#333333"
          color="white"
          text="3"
          function={() => addIntToDisplay('3')}
        />
        <Button
          orange
          backgroundColor={operator === 'addition' ? 'white' : '#FF9E0C'}
          function={() => operatorButtons('addition')}
        >
          <Feather
            name="plus"
            size={25}
            color={operator === 'addition' ? '#FF9E0C' : 'white'}
            style={styles.icon}
          />
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
          function={() => addIntToDisplay('0')}
        />
        <Button
          backgroundColor="#333333"
          color="white"
          text="."
          function={() => dotButton()}
        />
        <Button
          backgroundColor="#FF9E0C"
          color="white"
          text="="
          function={() => resultButton()}
        />
      </View>
    </View>
  );
}

/* Styles for the home screen */
const styles = StyleSheet.create({
  // styling for the main container
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    padding: 10,
    paddingBottom: 14,
  },
  // Styling for the rows of buttons
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 7,
  },
  // styling for the feather icons
  icon: {
    textAlign: 'center',
  },
});
