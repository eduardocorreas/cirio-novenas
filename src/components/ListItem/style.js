import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles';

const style = StyleSheet.create({
  card: {
    marginBottom: 10,
    backgroundColor: colors.secondary,
    width: '100%',
    height: 60,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3
    },
    justifyContent: 'center',
    elevation: 5,
    flexWrap: 'wrap'
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    marginStart: '5%',
    marginEnd: '5%',
    fontSize: fonts.big,
    color: colors.white,
    fontWeight: 'bold',
    flexWrap: 'wrap'
  },
  description: {
    marginLeft: '10%',
    marginRight: 200,
    fontSize: fonts.big,
    color: colors.white,
    textAlign: 'justify'
  },
  cardImage: {
    width: 100,
    height: 100,
    marginLeft: 200,
    marginTop: -50
  }
});

export default style;
