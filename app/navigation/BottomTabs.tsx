import { View, Text, SafeAreaView, TextInput, Button, TouchableOpacityBase, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../resources/Colors'
import { AppStrings } from '../resources/Strings'
import { Device } from '../utils/Device'
import { NativeStackNavigationHelpers } from '@react-navigation/native-stack/lib/typescript/src/types'
import { ScreenName } from '../resources/Screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import Favorite from '../screens/Favorite'
type Props = {}
const Tab = createBottomTabNavigator();
const BottomTabs = (props: Props) => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarActiveTintColor: Colors.skyDark,
            tabBarInactiveTintColor: Colors.sky,
        })}>
            <Tab.Screen options={{                
                headerShown: false, tabBarIcon: ({ focused, color, size }) => {
                    return <Image source={{ uri: 'home' }} style={{ height: 30, width: 30, tintColor: focused ? Colors.skyDark : Colors.sky }} />;
                }
            }} name={ScreenName.HomeScreen} component={Home} />
            <Tab.Screen options={{
                headerShown: false, tabBarIcon: ({ focused, color, size }) => {
                    return <Image source={{ uri: 'star' }} style={{ height: 30, width: 30, tintColor: focused ? Colors.skyDark : Colors.sky }} />;
                }
            }} name={ScreenName.FavoriteScreen} component={Favorite} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create(
    {
        textinput: {
            backgroundColor: Colors.white, borderRadius: 10, height: 45, padding: 15
        }
    })
export default BottomTabs