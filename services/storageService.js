/**
 * Storage Service
 * Manages persistent storage using AsyncStorage
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

const HISTORY_KEY = '@librodex_search_history';
const MAX_HISTORY_ITEMS = 20;

/**
 * Save a search query to history
 * @param {string} query - Search query to save
 */
export const saveSearchToHistory = async (query) => {
    if (!query || query.trim() === '') return;

    try {
        const history = await getSearchHistory();

        // Remove duplicates and add to beginning
        const filteredHistory = history.filter(item => item.toLowerCase() !== query.toLowerCase());
        const newHistory = [query, ...filteredHistory].slice(0, MAX_HISTORY_ITEMS);

        await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
    } catch (error) {
        console.error('Error saving search history:', error);
    }
};

/**
 * Get search history
 * @returns {Promise<Array<string>>} Array of previous search queries
 */
export const getSearchHistory = async () => {
    try {
        const history = await AsyncStorage.getItem(HISTORY_KEY);
        return history ? JSON.parse(history) : [];
    } catch (error) {
        console.error('Error getting search history:', error);
        return [];
    }
};

/**
 * Clear all search history
 */
export const clearSearchHistory = async () => {
    try {
        await AsyncStorage.removeItem(HISTORY_KEY);
    } catch (error) {
        console.error('Error clearing search history:', error);
    }
};

/**
 * Remove a specific item from search history
 * @param {string} query - Query to remove
 */
export const removeFromHistory = async (query) => {
    try {
        const history = await getSearchHistory();
        const newHistory = history.filter(item => item !== query);
        await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
    } catch (error) {
        console.error('Error removing from history:', error);
    }
};

// Popular search suggestions (static)
export const SEARCH_SUGGESTIONS = [
    'JavaScript',
    'Python',
    'React',
    'Machine Learning',
    'Design Patterns',
    'Data Science',
    'Web Development',
    'Mobile Apps',
];
