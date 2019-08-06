import React, { useState } from 'react';
import { FlatList, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../../styles';
import general from '../../styles/general';

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
  const [musicas] = useState([
    { id: '1', title: 'Que é essa que avança como a aurora? ', lyrics: 'Cifra 1' },
    { id: '2', title: 'Maria de Nazaré', lyrics: 'Cifra 2' }
  ]);
  const { navigation } = props;

  function renderItem(item) {
    return <ListItem title={item.item.title} navigation={navigation} />;
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
