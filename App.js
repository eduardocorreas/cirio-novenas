import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home, { navigationOptionsHome } from './src/screens/home';
import Ensaio, { navigationOptionsEnsaio } from './src/screens/ensaio';
import Music, { navigationOptionsMusic } from './src/screens/ensaio/music';
import Terco, { navigationOptionsTerco } from './src/screens/aprenda/terco';
import './src/config/StatusBarConfig';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: navigationOptionsHome
    },
    Ensaio: {
      screen: Ensaio,
      navigationOptions: navigationOptionsEnsaio
    },
    Music: {
      screen: Music,
      navigationOptions: navigationOptionsMusic
    },
    Aprenda: {
      screen: Terco,
      navigationOptions: navigationOptionsTerco
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
