
import React, { useEffect, useRef, useState } from 'react'
import {
  useColorScheme
} from 'react-native';
import Mainstack from './app/navigation/Mainstack';
import { Provider } from 'react-redux';
import Store from './app/redux/Store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppConstants } from './app/utils/AppConstants';
import { ScreenName } from './app/resources/Screens';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [initDone, setinitDone] = useState(false)
  const [initialScreen, setinitialScreen] = useState<string>()
  useEffect(() => {
    isPrevLoggedIn()
    return () => { }
  }, [])
  async function isPrevLoggedIn() {
    await AsyncStorage.getItem(AppConstants.IS_LOGGED_IN).then(val => {
      if (val == JSON.stringify(true)) {
        setinitialScreen(ScreenName.DashboardScreen)
        setinitDone(true)
      }
      else {
        setinitialScreen(ScreenName.LoginScreen)
        setinitDone(true)
      }
    })
  }
  return (
    <Provider store={Store}>
      {initDone ? <Mainstack initialScreen={initialScreen} /> : null}
    </Provider>
  );
};
export default App;
