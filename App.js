import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from './header/header';
import HomeScreen from "./screens/homeScreen";
import RunningScreen from './screens/RunningScreen';
import LiftingScreen from './screens/LiftingScreen';
import CardioScreen from './screens/CardioScreen';
import CrossfitScreen from './screens/CrossfitScreen';
import LowerBody from './screens/LowerBody';
import UpperBody from './screens/UpperBody';
import FullBody from './screens/FullBody';
import EnduranceWorkout from './screens/EnduranceWorkout';
import SpeedWorkout from './screens/SpeedWorkout';
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <View style = {styles.container}>
      <Header/>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name = 'Home' component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name = 'Lifting' component={LiftingScreen} options={{ headerShown: false }}/>
      <Stack.Screen name = 'Running' component={RunningScreen} options={{ headerShown: false }}/> 
      <Stack.Screen name = 'Cardio' component={CardioScreen} options={{ headerShown: false }}/>
      <Stack.Screen name = 'Crossfit' component={CrossfitScreen} options={{ headerShown: false }}/>
      <Stack.Screen name = 'LowerBody' component={LowerBody} options={{ headerShown: false }} />
      <Stack.Screen name = 'UpperBody' component={UpperBody} options={{ headerShown: false }} />
      <Stack.Screen name = 'FullBody' component={FullBody} options={{ headerShown: false }} />
      <Stack.Screen name = 'Endurance Workout' component={EnduranceWorkout} options={{ headerShown: false }} />
      <Stack.Screen name = 'Speed Workout' component={SpeedWorkout} options={{ headerShown: false }} />

      </Stack.Navigator>
      </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
