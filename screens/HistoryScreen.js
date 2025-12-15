import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { getSearchHistory, clearSearchHistory, removeFromHistory } from '../services/storageService';
import { styles, colors } from '../styles/styles';

/**
 * HistoryScreen Component
 * Displays complete search history with ability to clear or remove items
 */
const HistoryScreen = ({ navigation }) => {
    const [history, setHistory] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        loadHistory();

        // Reload history when screen comes into focus
        const unsubscribe = navigation.addListener('focus', () => {
            loadHistory();
        });

        return unsubscribe;
    }, [navigation]);

    const loadHistory = async () => {
        const historyData = await getSearchHistory();
        setHistory(historyData);
    };

    const handleClearAll = () => {
        Alert.alert(
            'Borrar historial',
            '¿Estás seguro de que quieres borrar todo el historial?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Borrar',
                    style: 'destructive',
                    onPress: async () => {
                        await clearSearchHistory();
                        setHistory([]);
                    },
                },
            ]
        );
    };

    const handleRemoveItem = async (item) => {
        await removeFromHistory(item);
        setHistory(history.filter(h => h !== item));
    };

    const handleSearchAgain = (query) => {
        navigation.navigate('Search', { query });
    };

    const onRefresh = async () => {
        setRefreshing(true);
        await loadHistory();
        setRefreshing(false);
    };

    const renderHistoryItem = ({ item }) => (
        <View style={styles.historyItem}>
            <TouchableOpacity
                style={styles.historyItemContent}
                onPress={() => handleSearchAgain(item)}
                activeOpacity={0.7}
            >
                <Text style={styles.historyIcon}>🔍</Text>
                <Text style={styles.historyText}>{item}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.historyDeleteButton}
                onPress={() => handleRemoveItem(item)}
            >
                <Text style={styles.historyDeleteText}>×</Text>
            </TouchableOpacity>
        </View>
    );

    const renderEmptyState = () => (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>📚 Sin historial</Text>
            <Text style={styles.emptySubtext}>
                Tus búsquedas anteriores aparecerán aquí
            </Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Historial</Text>
                <Text style={styles.subtitle}>Tus búsquedas recientes</Text>
            </View>

            {/* Clear Button */}
            {history.length > 0 && (
                <View style={styles.headerActions}>
                    <TouchableOpacity
                        style={styles.clearButton}
                        onPress={handleClearAll}
                    >
                        <Text style={styles.clearButtonText}>Borrar todo</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* History List */}
            <FlatList
                data={history}
                renderItem={renderHistoryItem}
                keyExtractor={(item, index) => `${item}-${index}`}
                contentContainerStyle={history.length === 0 ? styles.emptyContentContainer : styles.historyListContainer}
                ListEmptyComponent={renderEmptyState}
                refreshing={refreshing}
                onRefresh={onRefresh}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

export default HistoryScreen;
