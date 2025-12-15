import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { searchBooks } from '../services/bookService';
import { saveSearchToHistory, getSearchHistory, SEARCH_SUGGESTIONS } from '../services/storageService';
import BookCard from '../components/BookCard';
import SearchSuggestions from '../components/SearchSuggestions';
import { styles, colors } from '../styles/styles';

/**
 * SearchScreen Component
 * Main screen for searching books with suggestions and history
 */
const SearchScreen = ({ route, onBookPress }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [searchHistory, setSearchHistory] = useState([]);

    // Load history when component mounts
    useEffect(() => {
        loadHistory();
    }, []);

    // Handle incoming search query from history screen
    useEffect(() => {
        if (route?.params?.query) {
            setSearchQuery(route.params.query);
        }
    }, [route?.params?.query]);

    const loadHistory = async () => {
        const history = await getSearchHistory();
        setSearchHistory(history);
    };

    // Debounce search to avoid too many API calls
    useEffect(() => {
        const delaySearch = setTimeout(() => {
            if (searchQuery.trim().length > 2) {
                performSearch(searchQuery);
            } else if (searchQuery.trim().length === 0) {
                setBooks([]);
            }
        }, 500);

        return () => clearTimeout(delaySearch);
    }, [searchQuery]);

    const performSearch = async (query) => {
        setLoading(true);
        try {
            const results = await searchBooks(query);
            setBooks(results);

            // Save to history after successful search
            if (results.length > 0) {
                await saveSearchToHistory(query);
                await loadHistory(); // Reload history to update suggestions
            }
        } catch (error) {
            console.error('Search error:', error);
            setBooks([]);
        } finally {
            setLoading(false);
        }
    };

    const handleBookPress = (book) => {
        onBookPress(book);
    };

    const handleSelectSuggestion = (suggestion) => {
        setSearchQuery(suggestion);
    };

    const renderBookCard = ({ item }) => (
        <BookCard book={item} onPress={handleBookPress} />
    );

    const renderEmptyState = () => {
        if (loading) return null;

        if (searchQuery.trim().length === 0) {
            return (
                <View style={styles.emptyStateContainer}>
                    <SearchSuggestions
                        suggestions={SEARCH_SUGGESTIONS}
                        history={searchHistory}
                        onSelectSuggestion={handleSelectSuggestion}
                    />
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>📖 LibroDex</Text>
                        <Text style={styles.emptySubtext}>
                            Busca libros o selecciona una sugerencia
                        </Text>
                    </View>
                </View>
            );
        }

        if (books.length === 0 && searchQuery.trim().length > 2) {
            return (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>🔍 Sin resultados</Text>
                    <Text style={styles.emptySubtext}>
                        No se encontraron libros para "{searchQuery}"
                    </Text>
                </View>
            );
        }

        return null;
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>LibroDex</Text>
                <Text style={styles.subtitle}>Descubre tu próxima lectura</Text>
            </View>

            {/* Search Input */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={[
                        styles.searchInput,
                        isFocused && styles.searchInputFocused
                    ]}
                    placeholder="Buscar libros..."
                    placeholderTextColor={colors.textSecondary}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>

            {/* Results List */}
            {loading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={colors.primary} />
                    <Text style={styles.loadingText}>Buscando libros...</Text>
                </View>
            ) : (
                <FlatList
                    data={books}
                    renderItem={renderBookCard}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={books.length === 0 ? styles.emptyContentContainer : styles.resultsContainer}
                    ListEmptyComponent={renderEmptyState}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps='handled'
                />
            )}


        </SafeAreaView>
    );
};

export default SearchScreen;
