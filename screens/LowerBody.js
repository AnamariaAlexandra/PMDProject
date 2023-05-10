import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View,TouchableWithoutFeedback,FlatList} from 'react-native';
import { Modal } from 'react-native';
const exercises = require('../files/legs.json');

export default function LowerBody() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const toggleModal = (item) => {
    setModalVisible(!isModalVisible);
    setSelectedItem(item.description);
    console.log(isModalVisible);
  };
 
  const renderItem = ({item})=>(
    <View>
      <TouchableWithoutFeedback onPress={()=>toggleModal(item)}>
          <View style = {styles.container}>
            < Text style = {styles.header}>{item.bodyPart}:</Text>
              < Text style = {styles.bar}>{item.exercise}</Text>
          </View>
      </TouchableWithoutFeedback>
      <Modal 
        visible={isModalVisible}>
          <View style = {{flex:1}}>
          < Text style = {styles.bar}>{selectedItem}</Text>
          <Button title = "back" onPress={toggleModal}/>
          </View>
      </Modal> 
    </View>
  
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
    color: '#EDBBFF',
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
    textAlign: 'center',
    textAlignVertical: "center",
  },
  header:{
    flex:0,
    backgroundColor:'#111',
    color: '#EDBBFF',
    fontSize:20,
    letterSpacing:3,
  },
  modal:{
    flex:1,
    height: 100,
    width: 100,
    backgroundColor:'red',
  },
})
