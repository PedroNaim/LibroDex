import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { styles, colors } from '../styles/styles';

/**
 * BookDetailScreen Component
 * Full screen displaying detailed information about a book
 */
const BookDetailScreen = ({ book, onBack }) => {

    if (!book) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.emptyText}>Libro no encontrado</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />

            {/* Header with Back Button */}
            <View style={styles.detailHeader}>
                <TouchableOpacity onPress={onBack} style={styles.backButton}>
                    <Text style={styles.backButtonText}>← Atrás</Text>
                </TouchableOpacity>
            </View>

            {/* Scrollable Content */}
            <ScrollView
                contentContainerStyle={styles.detailScrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Book Thumbnail */}
                <View style={styles.detailThumbnailContainer}>
                    {book.thumbnail ? (
                        <Image
                            source={{ uri: book.thumbnail }}
                            style={styles.detailThumbnail}
                            resizeMode='cover'
                        />
                    ) : (
                        <View style={styles.bookThumbnailPlaceholder}>
                            <Text style={styles.bookThumbnailPlaceholderText}>📚</Text>
                        </View>
                    )}
                </View>

                {/* Title and Authors */}
                <Text style={styles.detailTitle}>{book.title}</Text>
                <Text style={styles.detailAuthors}>{book.authors.join(', ')}</Text>

                {/* Metadata Grid */}
                <View style={styles.detailMetaGrid}>
                    <View style={styles.detailMetaItem}>
                        <Text style={styles.detailMetaLabel}>Publicado</Text>
                        <Text style={styles.detailMetaValue}>{book.publishedDate}</Text>
                    </View>
                    <View style={styles.detailMetaItem}>
                        <Text style={styles.detailMetaLabel}>Páginas</Text>
                        <Text style={styles.detailMetaValue}>{book.pageCount}</Text>
                    </View>
                    {book.averageRating && (
                        <View style={styles.detailMetaItem}>
                            <Text style={styles.detailMetaLabel}>Rating</Text>
                            <Text style={styles.detailMetaValue}>
                                ⭐ {book.averageRating.toFixed(1)} ({book.ratingsCount})
                            </Text>
                        </View>
                    )}
                </View>

                {/* Categories */}
                {book.categories.length > 0 && (
                    <View style={styles.detailSection}>
                        <Text style={styles.detailSectionTitle}>Categorías</Text>
                        <Text style={styles.detailSectionText}>{book.categories.join(', ')}</Text>
                    </View>
                )}

                {/* Description */}
                <View style={styles.detailSection}>
                    <Text style={styles.detailSectionTitle}>Descripción</Text>
                    <Text style={styles.detailSectionText}>{book.description}</Text>
                </View>

                {/* Language */}
                <View style={styles.detailSection}>
                    <Text style={styles.detailSectionTitle}>Idioma</Text>
                    <Text style={styles.detailSectionText}>{book.language.toUpperCase()}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default BookDetailScreen;
