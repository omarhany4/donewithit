import TodayScreen from './App/Screens/TodayScreen'
import AllExcercisesScreen from "./App/Screens/AllExcercisesScreen"
import SettingsScreen from './App/Screens/SettingsScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View,Image } from 'react-native';



const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator defaultScreenOptions={SettingsScreen}>
        <Tab.Screen name="Today" component={TodayScreen} options={{
        tabBarIcon: () => (<View ><Image source={require('./App/Screens/home.png')} style={{width:25,height:25}} /></View>)}} />
        <Tab.Screen name="All Excercises" component={AllExcercisesScreen} options={{
        tabBarIcon: () => (<View ><Image source={require('./App/Screens/Ex.jpg')} style={{width:25,height:25}} /></View>)}} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarIcon: () => (<View ><Image source={require('./App/Screens/Settings.png')} style={{width:25,height:25}} /></View>)}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}