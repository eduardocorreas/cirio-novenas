import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles';

const style = StyleSheet.create({
  container: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: colors.secondary,
    borderRadius: 4,
    flexDirection: 'row'
  },
  card: {
    marginBottom: 10,
    marginLeft: '2%',
    width: '100%',
    height: 200,
    shadowColor: colors.white,
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    marginTop: 30,
    marginBottom: 5,
    marginRight: 200,
    marginLeft: '10%',
    fontSize: 30,
    color: colors.white
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
