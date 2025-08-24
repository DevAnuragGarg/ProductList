import { StyleSheet, Dimensions } from 'react-native';
import { SECONDARY_COLOR, TERTIARY_COLOR } from '../../../helper/colors';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 16 * 2 - 10) / 2; // 2-column grid with padding + spacing

export const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    marginBottom: 10,
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
    height: ITEM_WIDTH,
    borderRadius: 10,
    marginBottom: 5,
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
  },
  amount: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: 'bold',
    color: TERTIARY_COLOR,
  },
  date: {
    fontSize: 14,
    color: 'white',
  },
});
