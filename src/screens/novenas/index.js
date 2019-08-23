import React, { useState } from 'react';
import { FlatList, View, ScrollView } from 'react-native';
import general from '../../styles/general';

import ListItemNovena from '../../components/ListItemNovena';

export function navigationOptionsNovena() {
  return {
    title: 'Escolha um encontro',
    headerStyle: general.header,
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };
}

function Novena(props) {
  const [encontros] = useState([
    { id: '1', title: 'Encontro 1' },
    { id: '2', title: 'Encontro 2' },
    { id: '3', title: 'Encontro 3' },
    { id: '4', title: 'Encontro 4' },
    { id: '5', title: 'Encontro 5' },
    { id: '6', title: 'Encontro 6' },
    { id: '7', title: 'Encontro 7' },
    { id: '8', title: 'Encontro 8' },
    { id: '9', title: 'Encontro 9' },
    { id: '10', title: 'Encontro 10' },
    { id: '11', title: 'Encontro 11' },
    { id: '12', title: 'Encontro 12' },
    { id: '13', title: 'Encontro 13' },
    { id: '14', title: 'Encontro 14' },
    { id: '15', title: 'Encontro 15' }
  ]);
  const { navigation } = props;

  function renderItem(item) {
    return <ListItemNovena title={item.item.title} id={item.item.id} navigation={navigation} />;
  }

  return (
    <ScrollView style={general.scrollview}>
      <View style={general.container}>
        <FlatList
          data={encontros}
          keyExtractor={item => item.id}
          renderItem={item => renderItem(item)}
        />
      </View>
    </ScrollView>
  );
}

export default Novena;
