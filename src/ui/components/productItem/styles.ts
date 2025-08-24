import { StyleSheet, Dimensions } from 'react-native';
import { SECONDARY_COLOR, TERTIARY_COLOR } from '../../../helper/colors';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 16 * 2 - 10) / 2; // 2-column grid with padding + spacing

export const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    marginBottom: 10,
    height: 264,
    padding: 10,
    borderRadius: 10,
    borderColor: 'white',
    justifyContent: 'flex-start',
    borderWidth: 2,
    elevation: 5,
    backgroundColor: SECONDARY_COLOR,
  },
  image: {
    width: '100%',
    height: 90,
    resizeMode: 'cover',
  },
  innerContainer: {
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: SECONDARY_COLOR,
  },
  title: {
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#FF9B00',
  },
  description: {
    marginTop: 3,
    fontSize: 12,
    color: 'white',
    flexShrink: 1,
  },
  amount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: TERTIARY_COLOR,
    marginTop: 'auto',
  },
});
