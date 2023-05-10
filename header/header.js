import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
        <View style = {styles.header}>
            <Text style = {styles.text}>GIRLS FIT</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:.3,
    backgroundColor: 'red',
  },
  header:{
    flex:1,
    backgroundColor: '#B847FD',
    flexDirection:'column',
    width: '100%',
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fontSize:30,
    color:'#EDBBFF',
    letterSpacing: 10,
    fontWeight:'bold',
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  }
});
