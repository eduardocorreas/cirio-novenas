import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home, { navigationOptionsHome } from './src/screens/home';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: navigationOptionsHome
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
