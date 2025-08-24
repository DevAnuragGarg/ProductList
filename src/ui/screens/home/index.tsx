import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  TextInput,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';
import { useHomeUI } from './useHomeUI.hook';
import { HomeScreenProps } from './props.type';
import { ProductItem } from '../../components/productItem/ProductItem';
import { UIButton } from '../../components/button/UIButton';

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const {
    filteredProducts,
    loading,
    error,
    refetch,
    loadMore,
    hasMore,
    searchText,
    setSearchText,
    selectedCategory,
    setSelectedCategory,
  } = useHomeUI({} as HomeScreenProps);

  const ITEM_HEIGHT = 264; // card height + margin
  const NUM_COLUMNS = 2;

  // extract the unique categories from the products for filtering
  const categories = Array.from(new Set(filteredProducts.map(p => p.category)));

  return (
    <View style={styles.root}>
      {/* 🔍 Search Input */}
      <TextInput
        style={styles.textInput}
        placeholder="Search product.."
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* 📂 Category Filter */}
      <View style={styles.pickerView}>
        <Picker
          selectedValue={selectedCategory}
          style={styles.picker}
          onValueChange={setSelectedCategory}
        >
          <Picker.Item label="All Categories" value={null} />
          {categories.map(cat => (
            <Picker.Item key={cat} label={cat} value={cat} />
          ))}
        </Picker>
      </View>

      {/* 📦 Product List / Error / Empty States */}
      {error ? (
        <View style={styles.centered}>
          <Text style={styles.errorText}>Error: {error}</Text>
          <UIButton text="RETRY" onClick={() => refetch()} />
        </View>
      ) : loading && filteredProducts.length === 0 ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" />
        </View>
      ) : filteredProducts.length === 0 ? (
        <View style={styles.centered}>
          <Text style={styles.noProductText}>No products found.</Text>
        </View>
      ) : (
        <FlatList
          data={filteredProducts}
          numColumns={NUM_COLUMNS}
          columnWrapperStyle={styles.listColumnStyle}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <ProductItem product={item} />}
          // 🔽 Performance Optimizations
          initialNumToRender={10} //  renders 10 items at startup
          maxToRenderPerBatch={10} //  renders 10 items per batch
          windowSize={5} // keep ~5 screens worth of rows in memory
          removeClippedSubviews={true} // unmount off-screen items
          getItemLayout={(data, index) => {
            const row = Math.floor(index / NUM_COLUMNS);
            return {
              length: ITEM_HEIGHT,
              offset: ITEM_HEIGHT * row,
              index,
            };
          }}
          onEndReached={() => {
            if (hasMore && !loading) {
              loadMore();
              console.log('Loading more products...');
            }
          }}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            loading && hasMore ? (
              <View style={styles.loader}>
                <ActivityIndicator size="small" />
              </View>
            ) : null
          }
        />
      )}
    </View>
  );
};
