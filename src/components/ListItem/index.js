import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const ListItem = ({ title }) => (
  <View style={style.card}>
    <TouchableOpacity style={style.card}>
      <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

export default ListItem;

ListItem.propTypes = {
  title: PropTypes.string.isRequired
};
