import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

/**
 * BookCard Component
 * Displays a book card with thumbnail, title, authors, and metadata
 */
const BookCard = ({ book, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.bookCard}
            onPress={() => onPress(book)}
            activeOpacity={0.7}
        >
            <View style={styles.bookCardContent}>
                {/* Book Thumbnail */}
                <View style={styles.bookThumbnailContainer}>
                    {book.thumbnail ? (
                        <Image
                            source={{ uri: book.thumbnail }}
                            style={styles.bookThumbnail}
                            resizeMode="cover"
                        />
                    ) : (
                        <View style={styles.bookThumbnailPlaceholder}>
                            <Text style={styles.bookThumbnailPlaceholderText}>📚</Text>
                        </View>
                    )}
                </View>

                {/* Book Info */}
                <View style={styles.bookInfo}>
                    <Text style={styles.bookTitle} numberOfLines={2}>
                        {book.title}
                    </Text>
                    <Text style={styles.bookAuthors} numberOfLines={1}>
                        {book.authors.join(', ')}
                    </Text>

                    {/* Metadata */}
                    <View style={styles.bookMeta}>
                        <Text style={styles.bookMetaText}>
                            📅 {book.publishedDate}
                        </Text>
                        {book.averageRating && (
                            <View style={styles.ratingContainer}>
                                <Text style={styles.ratingText}>
                                    ⭐ {book.averageRating.toFixed(1)}
                                </Text>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default BookCard;
