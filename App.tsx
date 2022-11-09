import React from 'react';
import {
  useColorScheme
} from 'react-native';
import Mainstack from './app/navigation/Mainstack';
import { Provider } from 'react-redux';
import Store from './app/redux/Store';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={Store}>
      <Mainstack />
    </Provider>
  );
};
export default App;
