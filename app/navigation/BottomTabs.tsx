import { View, Text, SafeAreaView, TextInput, Button, TouchableOpacityBase, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../resources/Colors'
import { AppStrings } from '../resources/Strings'
import { Device } from '../utils/Device'
import { NativeStackNavigationHelpers } from '@react-navigation/native-stack/lib/typescript/src/types'
import { ScreenName } from '../resources/Screens'
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import Favorite from '../screens/Favorite'
type Props = {}
const Tab = createBottomTabNavigator();
const BottomTabs = (props: Props) => {
    function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
        return <View style={[styles.bottomBar]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };
                return (
                    <TouchableOpacity
                        onPress={onPress}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={{ uri: label == ScreenName.HomeScreen ? 'home' : 'star' }} style={{ height: 30, width: 30, tintColor: isFocused ? Colors.skyDark : Colors.gray }} />
                        <Text style={{ color: isFocused ? Colors.skyDark : Colors.gray }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    }
    return (
        <Tab.Navigator tabBar={props => <CustomTabBar {...props} />} screenOptions={({ route }) => ({
            tabBarActiveTintColor: Colors.skyDark,
            tabBarInactiveTintColor: Colors.gray,

        })}>
            <Tab.Screen options={{
                headerShown: false
            }} name={ScreenName.HomeScreen} component={Home} />
            <Tab.Screen options={{
                headerShown: false, tabBarIcon: ({ focused, color, size }) => {
                    return <Image source={{ uri: 'star' }} style={{ height: 30, width: 30, tintColor: focused ? Colors.skyDark : Colors.gray }} />;
                }
            }} name={ScreenName.FavoriteScreen} component={Favorite} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create(
    {
        textinput: {
            backgroundColor: Colors.white, borderRadius: 10, height: 45, padding: 15
        },
        bottomBar: {
            width: Device.width/1.5,            
            backgroundColor: '#E6F4F1',
            flexDirection: 'row',
            borderTopLeftRadius:50,
            borderTopRightRadius:50,
            borderTopWidth: 0,
            position: 'absolute',
            bottom: 0,            
            padding:20,
            start:Device.width/6,
            borderWidth:1,
            borderColor:Colors.skyDark
        },
    })
export default BottomTabs