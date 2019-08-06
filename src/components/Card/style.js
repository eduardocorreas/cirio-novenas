import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles';

const style = StyleSheet.create({
  card: {
    marginBottom: 10,
    borderRadius: 50,
    width: '100%',
    height: 200,
    shadowColor: colors.black,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 2,
      height: 2
    },
    elevation: 10
  },
  title: {
    marginTop: 30,
    marginBottom: 5,
    marginRight: 200,
    marginLeft: '10%',
    fontSize: fonts.bigger,
    color: colors.white,
    textAlign: 'center'
  },
  description: {
    marginLeft: '10%',
    marginRight: 200,
    fontSize: fonts.big,
    color: colors.white,
    textAlign: 'justify'
  },
  cardImage: {
    width: '100%',
    height: '100%',
    zIndex: -1
  }
});

export default style;
