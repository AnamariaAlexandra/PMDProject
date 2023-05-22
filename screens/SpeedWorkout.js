import { StatusBar } from 'expo-status-bar';
import { FlatList, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View,TouchableWithoutFeedback } from 'react-native';

const exercises = require('../files/speed.json');

export default function SpeedWorkout() {
  const renderItem = ({item})=>(

      <TouchableWithoutFeedback> 
        <View style = {styles.container}>        
        < Text style = {styles.bar}>{item.exercise}</Text>
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
    color: '#B847FD',
    backgroundColor:'#111',
    fontSize:20,
    letterSpacing:3,
    textAlign: 'center',
    textAlignVertical: "center",
  },
  header:{
    flex:0,
    backgroundColor:'#111',
    color: '#EDBBFF',
    fontSize:20,
    letterSpacing:3,
  }
})
