import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const ListItem = ({ title, key }) => (
  <View style={style.container} key={key}>
    <TouchableOpacity style={style.card}>
      <View>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default ListItem;

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  key: PropTypes.number.isRequired
};
