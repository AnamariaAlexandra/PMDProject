import { StatusBar } from 'expo-status-bar';
import { FlatList, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View,TouchableWithoutFeedback } from 'react-native';
import { useState } from 'react';

const exercises = require('../files/cardio.json');

export default function CardioScreen() {

  const [selectedExercises, setSelectedExercises] = useState([]);

  const toggleModalCheckBox = (item)=>{
    const exerciseIndex = selectedExercises.findIndex((exercise) => exercise.exercise === item.exercise);
    if (exerciseIndex !== -1) {
      const updatedExercises = [...selectedExercises];
      updatedExercises.splice(exerciseIndex, 1);
      setSelectedExercises(updatedExercises);
    } else {
      setSelectedExercises([...selectedExercises, item]);
    }
  }
  const renderItem = ({item})=>(

      <TouchableWithoutFeedback> 
        <View style = {styles.container}>        
        < Text style = {styles.bar}>{item.exercise}</Text>
        <TouchableOpacity
              style={styles.checkbox}
              onPress={() => toggleModalCheckBox(item)}
              >
              {selectedExercises.some((exercise) => exercise.exercise === item.exercise) && <View style={styles.checkboxInner} />}
            </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.container}>
        <FlatList 
        data = {exercises}
        renderItem={renderItem}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#111',
    flex:1,
    color: '#B847FD',
    height:100,
    borderBottomColor: 'grey',
    borderTopColor:'#EDBBFF',
    borderWidth: 2, 
    padding:10,
    flexDirection:'row',
    alignItems:'center',
},
  
  bar:{
    flex:1,
    height:90,
    color: '#EDBBFF',
    backgroundColor:'#111',
    fontSize:20,
    letterSpacing:3,
    textAlign: 'left',
    textAlignVertical: "center",
  },
  header:{
    flex:0,
    backgroundColor:'#111',
    color: '#EDBBFF',
    fontSize:20,
    letterSpacing:3,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#EDBBFF',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#EDBBFF',
  },
})
