import { useProducts } from '../../hooks/useProducts.hook';
import { HomeScreenProps } from './props.type';
import { useState, useMemo } from 'react';

// this hook will contain all the UI logic for Home Screen
// data fetching, pagination, error handling, loading state, etc.
// the UI component will only focus on rendering the UI based on the state
// this keeps the UI component clean and focused on presentation
// and makes it easier to test the logic separately
export const useHomeUI = (_: HomeScreenProps) => {
  const { products, loading, error, refetch, loadMore, hasMore, limit } =
    useProducts(10);

  // UI state for filtering
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter products locally
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = p.title
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const matchesCategory = selectedCategory
        ? p.category === selectedCategory
        : true;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchText, selectedCategory]);

  return {
    filteredProducts,
    loading,
    error,
    refetch,
    loadMore,
    hasMore,
    limit,
    searchText,
    setSearchText,
    selectedCategory,
    setSelectedCategory,
  };
};
