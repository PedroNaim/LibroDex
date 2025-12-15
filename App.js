import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SearchScreen from './screens/SearchScreen';
import BookDetailScreen from './screens/BookDetailScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('search');
  const [selectedBook, setSelectedBook] = useState(null);

  const navigateToDetail = (book) => {
    setSelectedBook(book);
    setCurrentScreen('detail');
  };

  const navigateBack = () => {
    setCurrentScreen('search');
    setSelectedBook(null);
  };

  return (
    <SafeAreaProvider>
      {currentScreen === 'search' ? (
        <SearchScreen onBookPress={navigateToDetail} />
      ) : (
        <BookDetailScreen book={selectedBook} onBack={navigateBack} />
      )}
    </SafeAreaProvider>
  );
}
