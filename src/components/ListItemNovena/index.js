import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const ListItemNovena = ({ title, id, navigation }) => (
  <View style={style.card}>
    <TouchableOpacity
      style={style.card}
      onPress={() => navigation.navigate('Encontro', { title, id })}
    >
      <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

export default ListItemNovena;

ListItemNovena.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  navigation: PropTypes.any.isRequired
};
