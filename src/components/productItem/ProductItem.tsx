import { View, Text, Image } from 'react-native';
import { ProductItemProps } from './props.types';
import { styles } from './styles';

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.thumbnail }}
        style={styles.image}
      />
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {product.title}
      </Text>
      <Text style={styles.description} numberOfLines={7} ellipsizeMode="tail">
        {product.description}
      </Text>
      <Text style={styles.amount}>Price: ${product.price}</Text>
    </View>
  );
};
