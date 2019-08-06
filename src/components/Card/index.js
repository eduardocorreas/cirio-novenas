import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Card = ({ title, description, sendTo, props }) => (
  <View>
    <View style={style.container}>
      <TouchableOpacity style={style.card} onPress={() => props.navigation.navigate(sendTo)}>
        <View style={{ flex: 1 }}>
          <Text style={style.title}>{title}</Text>
          <Text style={style.description}>{description}</Text>
        </View>
        <View style={{ flex: 1, alignSelf: 'center' }}>
          <Image
            style={style.cardImage}
            source={{
              uri:
                'https://aleteiaportuguese.files.wordpress.com/2017/05/web3-our-lady-of-fatima-pilgrm-statue-statue-church-stained-glass-blessed-virgin-dennis-callahan-photos-cc.jpg?quality=100&strip=all&w=620&h=310&crop=1'
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  sendTo: PropTypes.string.isRequired
};
