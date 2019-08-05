import React from 'react';
import { Text } from 'react-native';
import { colors } from '../../styles';

export function navigationOptionsHome() {
  return {
    title: 'Início',
    headerStyle: {
      backgroundColor: colors.primary
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };
}

function Home() {
  return <Text>Olá</Text>;
}

export default Home;
