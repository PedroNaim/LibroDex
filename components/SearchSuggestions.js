import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { colors } from '../styles/styles';

/**
 * SearchSuggestions Component
 * Displays popular search suggestions and recent search history
 */
const SearchSuggestions = ({ suggestions, history, onSelectSuggestion }) => {
    const renderSuggestion = ({ item }) => (
        <TouchableOpacity
            style={styles.suggestionChip}
            onPress={() => onSelectSuggestion(item)}
            activeOpacity={0.7}
        >
            <Text style={styles.suggestionText}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Recent Searches */}
            {history && history.length > 0 && (
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>🕒 Búsquedas recientes</Text>
                    <FlatList
                        data={history.slice(0, 5)}
                        renderItem={renderSuggestion}
                        keyExtractor={(item, index) => `history-${index}`}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.chipList}
                    />
                </View>
            )}

            {/* Popular Suggestions */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>🔥 Sugerencias populares</Text>
                <FlatList
                    data={suggestions}
                    renderItem={renderSuggestion}
                    keyExtractor={(item, index) => `suggestion-${index}`}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.chipList}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    section: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.textSecondary,
        paddingHorizontal: 20,
        marginBottom: 12,
    },
    chipList: {
        paddingHorizontal: 20,
    },
    suggestionChip: {
        backgroundColor: colors.surface,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginRight: 8,
        borderWidth: 1,
        borderColor: colors.border,
    },
    suggestionText: {
        color: colors.text,
        fontSize: 14,
    },
});

export default SearchSuggestions;
