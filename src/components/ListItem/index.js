import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const ListItem = ({ title, code, video, navigation }) => (
  <View style={style.card}>
    <TouchableOpacity
      style={style.card}
      onPress={() => navigation.navigate('Music', { title, code, video })}
    >
      <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

export default ListItem;

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired
};
