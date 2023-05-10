import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback,Image } from 'react-native';

export default function HomeScreen({navigation}) {

  const data = [{key:'Lifting', src: require('../images/Lifting.png')},
  {key: 'Running', src: require('../images/runner.png')},
  {key:'Cardio',src: require('../images/cardio.png') },
  {key:'Crossfit', src: require('../images/dumbbell.png')},
  ];

  const renderItem = ({item})=>(
    <TouchableWithoutFeedback onPress={()=>{navigation.navigate(item.key)}}> 
        <View style = {styles.container}>
          <Text style = {styles.bar}>{item.key}</Text>
          <Image
          style={styles.img}
          source={item.src}
          />
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
    color: '#EDBBFF',
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
  
  img:{
    width:150,
    height:150,
  },  
});
