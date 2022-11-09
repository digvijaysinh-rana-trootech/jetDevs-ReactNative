import React from 'react';
import {
  useColorScheme
} from 'react-native';
import Mainstack from './app/navigation/Mainstack';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Mainstack />
  );
};
export default App;
