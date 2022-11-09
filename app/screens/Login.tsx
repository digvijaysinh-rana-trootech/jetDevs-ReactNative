import { View, Text, SafeAreaView, TextInput, Button, TouchableOpacityBase, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../resources/Colors'
import { AppStrings } from '../resources/Strings'
import { Device } from '../utils/Device'
import { NativeStackNavigationHelpers } from '@react-navigation/native-stack/lib/typescript/src/types'
import { ScreenName } from '../resources/Screens'

type Props = {
  navigation: NativeStackNavigationHelpers
}

const Login = (props: Props) => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  function loginClick() {
    props.navigation.navigate(ScreenName.DashboardScreen)
    console.log(email, password)
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.sky }}>
      <ScrollView style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 50, flex: 1, color: Colors.skyDark }}>{AppStrings.Login}</Text>
        <View style={{ height: Device.height * 0.25, justifyContent: 'space-evenly' }}>
          <TextInput value={email} onChangeText={(value) => setemail(value)} placeholder={AppStrings.Email} style={styles.textinput} />
          <TextInput value={password} onChangeText={(value) => setpassword(value)} placeholder={AppStrings.Password} style={styles.textinput} />
        </View>
        <TouchableOpacity onPress={() => loginClick()} style={[styles.textinput, { width: Device.width / 2, alignSelf: 'center', backgroundColor: Colors.skyDark, justifyContent: 'center', alignItems: 'center' }]}>
          <Text style={{ color: Colors.white }}>{AppStrings.Login}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create(
  {
    textinput: {
      backgroundColor: Colors.white, borderRadius: 10, height: 45, padding: 15
    }
  })
export default Login