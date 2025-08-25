import { useState, useEffect } from 'react';
import { Product } from '../api/types/product';
import { fetchProducts } from '../api/productAPI';

// this hook will manage product data fetching, pagination, loading, and error states
// it can be reused in other screens if needed
// it has functions to load more products and refetch
export const useProducts = (initialLimit: number = 10) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [limit, setLimit] = useState<number>(initialLimit);
  const [skip, setSkip] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const getProducts = async (
    newLimit: number = limit,
    newSkip: number = skip,
    append: boolean = false,
  ) => {
    console.log('Fetching products with limit:', newLimit, 'skip:', newSkip);
    if (loading || (!hasMore && append)) return; // Prevent multiple calls or fetching when no more data

    setLoading(true);
    setError(null);
    try {
      const res = await fetchProducts(newLimit, newSkip);
      const newProducts: Product[] = res.products;

      setProducts(prevProducts => {
        // this is to prevent duplicates when loading more, important for pagination
        if (append) {
          // Prevent duplicates
          const filtered = newProducts.filter(
            np => !prevProducts.some(pp => pp.id === np.id),
          );
          return [...prevProducts, ...filtered];
        }
        return newProducts;
      });
      setLimit(newLimit);
      setSkip(newSkip + newProducts.length);
      setHasMore(newProducts.length === limit); // if returned less than limit, no more products
    } catch (err: any) {
      console.error('Error fetching products:', err);
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  // 👇 Auto-fetch on mount
  useEffect(() => {
    getProducts(initialLimit, 0, false);
  }, []);

  // Load next batch for pagination
  const loadMore = () => {
    if (hasMore && !loading) {
      getProducts(limit, skip, true);
    }
  };

  // Optional: reset data and fetch from start
  const refetch = (newLimit: number = limit) => {
    setSkip(0);
    setHasMore(true);
    getProducts(newLimit, 0, false);
  };

  return { products, loading, error, refetch, loadMore, hasMore, limit };
};
