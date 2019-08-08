import React, { useState } from 'react';
import { FlatList, View, ScrollView } from 'react-native';
import general from '../../styles/general';
import musics from '../../assets/files/musics.json';

import ListItem from '../../components/ListItem';

export function navigationOptionsEnsaio() {
  return {
    title: 'Vamos ensaiar',
    headerStyle: general.header,
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };
}

function Ensaio(props) {
  const [musicas] = useState(musics.sort());
  const { navigation } = props;

  function renderItem(item) {
    return (
      <ListItem
        title={item.item.title}
        code={item.item.code}
        video={item.item.video}
        navigation={navigation}
      />
    );
  }

  return (
    <ScrollView style={general.scrollview}>
      <View style={general.container}>
        <FlatList
          data={musicas}
          keyExtractor={item => item.id}
          renderItem={item => renderItem(item)}
        />
      </View>
    </ScrollView>
  );
}

export default Ensaio;
