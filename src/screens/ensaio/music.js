import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import HTMLView from 'react-native-htmlview';
import general from '../../styles/general';
import showMusic from './showMusic';

export function navigationOptionsMusic() {
  return {
    title: 'Vamos ensaiar',
    headerStyle: general.header,
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };
}

function Music(props) {
  const { title, code } = props.navigation.state.params;

  const chords = showMusic(code);

  return (
    <ScrollView style={general.scrollview}>
      <View>
        <View style={{ height: 250 }}>
          <Text>Audio </Text>
        </View>
        <View style={general.container}>
          <Text style={general.title}>{title}</Text>
          <HTMLView value={chords} style={{ flex: 1 }} />
        </View>
      </View>
    </ScrollView>
  );
}

export default Music;
