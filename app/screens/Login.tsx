import { View, Text, SafeAreaView, TextInput, Button, TouchableOpacityBase, TouchableOpacity, ScrollView, StyleSheet, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../resources/Colors'
import { AppStrings } from '../resources/Strings'
import { Device } from '../utils/Device'
import { NativeStackNavigationHelpers } from '@react-navigation/native-stack/lib/typescript/src/types'
import { ScreenName } from '../resources/Screens'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppConstants } from '../utils/AppConstants'
type Props = {
  navigation: NativeStackNavigationHelpers
}

const Login = (props: Props) => {
  const toBeEmail = "reactnative@jetdevs.com"
  const toBePassword = "jetdevs@123"  
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  async function loginClick() {
    if (email == toBeEmail && password == toBePassword) {
      try {
        await AsyncStorage.setItem(AppConstants.IS_LOGGED_IN, JSON.stringify(true)).then((val) => {
          props.navigation.navigate(ScreenName.DashboardScreen)
        })
      } catch (error) {
        console.log("Error", error)
      }

    }
    else {
      Alert.alert(AppStrings.JetDevs, AppStrings.PleaseEnterValid)
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.sky }}>
      <ScrollView style={{ flex: 1, padding: 20 }}>
        <Image source={{ uri: 'login' }} style={{ height: Device.width / 3, width: Device.width / 3, alignSelf: 'center', margin: 40 }} />
        <View style={{ padding: 10, backgroundColor: Colors.white, borderRadius: 20 }}>
          <Text style={{ fontSize: 30, flex: 1, color: Colors.skyDark, textAlign: 'center' }}>{AppStrings.Login}</Text>
          <View style={{ height: Device.height * 0.25, justifyContent: 'space-evenly' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={{ uri: 'email' }} style={{ height: 30, width: 30, margin: 5 }} />
              <TextInput value={email} onChangeText={(value) => setemail(value)} placeholder={AppStrings.Email} style={styles.textinput} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={{ uri: 'password' }} style={{ height: 30, width: 30, margin: 5 }} />
              <TextInput value={password} secureTextEntry onChangeText={(value) => setpassword(value)} placeholder={AppStrings.Password} style={styles.textinput} />
            </View>
            <TouchableOpacity onPress={() => loginClick()} style={[{ height: 30, borderRadius: 30, width: Device.width / 2, padding: 0, alignSelf: 'center', backgroundColor: Colors.skyDark, justifyContent: 'center', alignItems: 'center' }]}>
              <Text style={{ color: Colors.white }}>{AppStrings.Login}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text onPress={() => Alert.alert(AppStrings.JetDevs, AppStrings.ComingSoon)} style={{ color: Colors.skyDark, margin: 15, textAlign: 'center' }}>{AppStrings.ForgotPass}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create(
  {
    textinput: {
      backgroundColor: Colors.lightSky, borderRadius: 10, height: 45, padding: 15, flex: 7, margin: 5
    }
  })
export default Login