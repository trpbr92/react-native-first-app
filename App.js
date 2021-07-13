import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
const [courseGoals, setCourseGoals] = useState([]);

const handleAddGoal = goalTitle => {
  setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goalTitle }]);
};

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={handleAddGoal} />
      <FlatList
      keyExtractor={(item, index) => item.id} 
      data={courseGoals} 
      renderItem={itemData => <GoalItem title={itemData.item.value} /> } 
    />
    </View>
  );
}

const styles = StyleSheet.create({
 screen: {
   padding: 50
 }
});
