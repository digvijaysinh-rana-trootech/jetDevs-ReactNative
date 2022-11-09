import { View, Text, SafeAreaView, TextInput, Button, TouchableOpacityBase, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../resources/Colors'
import { AppStrings } from '../resources/Strings'
import { Device } from '../utils/Device'

type Props = {}

const Login = (props: Props) => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.sky, padding: 20 }}>
      <ScrollView style={{ flex: 1 }}>
        <Text style={{ fontSize: 50, flex: 1, color: Colors.skyDark }}>{AppStrings.Login}</Text>
        <View style={{ height: Device.height * 0.25, justifyContent: 'space-evenly' }}>
          <TextInput value={email} onChangeText={(value) => setemail(value)} placeholder={AppStrings.Email} style={{ backgroundColor: Colors.white, borderRadius: 10 }} />
          <TextInput value={password} onChangeText={(value) => setpassword(value)} placeholder={AppStrings.Password} style={{ backgroundColor: Colors.white, borderRadius: 10 }} />
        </View>
        <View style={{ width: Device.width / 2, alignSelf: 'center' }}>
          <Button onPress={() => { console.log(email + " " + password) }} title={AppStrings.Login} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login