import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenName } from '../resources/Screens';
import Login from '../screens/Login';
import BottomTabs from './BottomTabs';

type Props = {}

const Stack = createNativeStackNavigator();

const Mainstack = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name={ScreenName.LoginScreen} component={Login} />
        <Stack.Screen options={{ headerShown: false }} name={ScreenName.DashboardScreen} component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Mainstack