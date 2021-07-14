import React, {useState} from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    
    const handleGoalInput = (enteredText) => {
        setEnteredGoal(enteredText);
      };

      const handleAddGoal = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
      }

    return (
      <Modal visible={props.visible}animationType='slide'>
     <View style={styles.inputContainer}>
        <TextInput 
        placeholder='Course Goal' 
        style={styles.input} 
        onChangeText={handleGoalInput}
        value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <Button title ='ADD' onPress={handleAddGoal} />
          <Button title='CANCEL' color='red' onPress={props.onCancel}/>
        </View>
    </View>
    </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
       },
       input: {
        width: '80%', 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%'
      }
})

export default GoalInput;