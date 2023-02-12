import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Survey from './src/Screen/Survey/Survey'
import Dashboard from './src/Screen/Dashboard/Dashboard'
import Splash from './src/Screen/Splash/Splash'


const App = () => {
  const Stack =createNativeStackNavigator()
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
      <Stack.Screen name="Survey" component={Survey}/>
      <Stack.Screen name="Dashboard" component={Dashboard}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})