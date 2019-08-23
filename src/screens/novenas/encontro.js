import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';
import general from '../../styles/general';
import showEncontro from './showEncontro';

export function navigationOptionsEncontro() {
  return {
    title: 'Vamos ensaiar',
    headerStyle: general.header,
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };
}

function Encontro(props) {
  const { title, id } = props.navigation.state.params;

  const encontro = showEncontro(id);

  const styleHTML = StyleSheet.create({
    span: {
      fontSize: 15,
      textAlign: 'justify',
      marginBottom: -20
    },
    h3: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: -40,
      justifyContent: 'center'
    },
    h4: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: -40
    }
  });

  return (
    <ScrollView style={general.scrollview}>
      <View>
        <View style={general.container}>
          <View style={general.titleView}>
            <Text style={general.title}>{title}</Text>
          </View>
          <HTMLView value={encontro} style={{ flex: 1 }} stylesheet={styleHTML} />
        </View>
      </View>
    </ScrollView>
  );
}

export default Encontro;
