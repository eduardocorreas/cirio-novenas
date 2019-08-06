import React from 'react';
import { TouchableOpacity, ImageBackground, Text, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Card = ({ title, description, sendTo, props, img }) => (
  <TouchableOpacity style={style.card} onPress={() => props.navigation.navigate(sendTo)}>
    <View style={{ flex: 1 }}>
      <Text style={style.title}>{title}</Text>
      <Text style={style.description}>{description}</Text>
    </View>

    <ImageBackground style={style.cardImage} source={img} />
  </TouchableOpacity>
);

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  sendTo: PropTypes.string.isRequired
};
