import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
const [enteredGoal, setEnteredGoal] = useState('');
const [courseGoals, setCourseGoals] = useState([]);

const handleGoalInput = (enteredText) => {
  setEnteredGoal(enteredText);
};

const handleAddGoal = () => {
  setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
};

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder='Course Goal' 
        style={styles.input} 
        onChangeText={handleGoalInput}
        value={enteredGoal}
        />
        <Button title ='ADD' onPress={handleAddGoal} />
      </View>
      <View>
        {courseGoals.map((goal) => <Text>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 screen: {
   padding: 50
 },
 inputContainer: {
  flexDirection: 'row', 
  justifyContent: 'space-between', 
  alignItems: 'center'
 },
input: {
  width: '80%', 
  borderColor: 'black', 
  borderWidth: 1, 
  padding: 10
},
});
