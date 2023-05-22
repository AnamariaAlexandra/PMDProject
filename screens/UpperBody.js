import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { FlatList,Modal } from 'react-native';
import { StyleSheet, Text, View,TouchableWithoutFeedback,Image } from 'react-native';

const exercises = require('../files/chest.json');

export default function UpperBody() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  

  const toggleModal = (item) => {
    setModalVisible(!isModalVisible);
    setSelectedItem(item.description);
    switch(item.image){
      case "bardip":
        setSelectedImage(require('../images/bardip.jpg'));
        break;
      case 'benchpress':
        setSelectedImage(require('../images/benchpress.jpg'));
        break;
      case 'cablepress':
        setSelectedImage(require('../images/cablepress.png'));
        break;  
      case 'closegrip':
        setSelectedImage(require('../images/closegrip.jpg'));
        break;
      case 'declinepress':
        setSelectedImage(require('../images/declinepress.jpg'));
        break;
      case 'chestfly':
        setSelectedImage(require('../images/chestfly.png'));
        break;
      case 'chestpress':
        setSelectedImage(require('../images/chestpress.png'));
        break;
    }
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
        visible={isModalVisible }>
          <View style = {styles.modal}>
          <Image style = {{ backgroundColor: 'purple', width: 300, height: 300}} source = {selectedImage} />
          < Text style = {styles.barex}>{selectedItem}</Text>
          <TouchableWithoutFeedback onPress={toggleModal}>
            <View>
              <Text style={styles.button}>Back</Text>
            </View>
          </TouchableWithoutFeedback>
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
    color: '#B847FD',
    fontSize:20,
    letterSpacing:3,
  },

  button:{
    width:200,
    padding:20,
    backgroundColor:'#B847FD',
    borderRadius:20,
    color:'#111',
    fontWeight:'900',
    fontSize:20,
    letterSpacing:3,
    textAlign:'center',
    marginTop:20,
  },
  modal:{
    flex:1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#111',
  },
  barex:{  
    flex:.5,
    height:90,
    color: '#B847FD',
    backgroundColor:'#111',
    fontSize:20,
    letterSpacing:3,
    textAlign: 'center',
    textAlignVertical: "center",
  },

})
