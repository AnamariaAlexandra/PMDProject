import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function RunningScreen({navigation}) {

  const data = [
  {key:'Speed Workout', src: require('../images/Lifting.png')},
  {key:'Endurance Workout', src: require('../images/Lifting.png')},
  ];

  const renderItem = ({item})=>(
    <TouchableWithoutFeedback onPress={()=>{navigation.navigate(item.key)}}> 
        <View style = {styles.container}>
          <Text style = {styles.bar}>{item.key}</Text>

        </View>
    </TouchableWithoutFeedback>
  );
  
  return (
    <View style={styles.container}>

      <FlatList 
        data = {data}
        renderItem={renderItem}
      />
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    color: '#B847FD',
    backgroundColor:'#111',
    height:173,
    borderBottomColor: 'grey',
    borderTopColor:'#EDBBFF',
    borderWidth: 2,
    padding:20,
    flexDirection:'row',
    alignItems:'center',
  },
  bar:{
    flex:1,
    color: '#EDBBFF',
    backgroundColor:'#111',
    fontSize:20,
    letterSpacing:3,
  },
});
