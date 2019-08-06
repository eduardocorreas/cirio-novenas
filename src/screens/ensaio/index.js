import React, { useState } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../../styles';

import ListItem from '../../components/ListItem';

export function navigationOptionsEnsaio() {
  return {
    title: 'Vamos ensaiar',
    headerStyle: {
      backgroundColor: colors.primary
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };
}

function Ensaio(props) {
  const [musicas] = useState([
    { id: 1, title: 'Musica 1', lyrics: 'Cifra 1' },
    { id: 2, title: 'Musica 2', lyrics: 'Cifra 2' }
  ]);
  const { navigation } = props;

  function renderItem(item) {
    return <ListItem title={item.title} key={item.id} navigation={navigation} />;
  }

  return <FlatList data={musicas} renderItem={item => renderItem(item)} />;
}

export default Ensaio;
