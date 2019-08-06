import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home, { navigationOptionsHome } from './src/screens/home';
import Ensaio, { navigationOptionsEnsaio } from './src/screens/ensaio';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: navigationOptionsHome
    },
    Ensaio: {
      screen: Ensaio,
      navigationOptions: navigationOptionsEnsaio
    }
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}
