import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { createNavigationContainerRef, NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenName } from '../resources/Screens';
import Login from '../screens/Login';
import BottomTabs from './BottomTabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppConstants } from '../utils/AppConstants';

type Props = {
  initialScreen:string
}
const navigationRef = createNavigationContainerRef()
const Stack = createNativeStackNavigator();

const Mainstack = (props: Props) => {
   return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={props.initialScreen}>
        <Stack.Screen options={{ headerShown: false }} name={ScreenName.LoginScreen} component={Login} />
        <Stack.Screen options={{ headerShown: false }} name={ScreenName.DashboardScreen} component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Mainstack