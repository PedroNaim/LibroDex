import React from 'react';
import {
    View,
    Text,
    Image,
    Modal,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { styles } from '../styles/styles';

/**
 * BookDetailModal Component
 * Displays detailed information about a book in a modal
 */
const BookDetailModal = ({ book, visible, onClose }) => {
    if (!book) return null;

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    {/* Modal Header with Close Button */}
                    <View style={styles.modalHeader}>
                        <View style={{ flex: 1 }} />
                        <TouchableOpacity
                            style={styles.modalCloseButton}
                            onPress={onClose}
                        >
                            <Text style={styles.modalCloseText}>×</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Modal Body - Scrollable */}
                    <ScrollView
                        style={styles.modalBody}
                        showsVerticalScrollIndicator={false}
                    >
                        {/* Book Thumbnail */}
                        <View style={styles.modalThumbnailContainer}>
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

                        {/* Title and Authors */}
                        <Text style={styles.modalTitle}>{book.title}</Text>
                        <Text style={styles.modalAuthors}>
                            {book.authors.join(', ')}
                        </Text>

                        {/* Metadata Grid */}
                        <View style={styles.modalMetaGrid}>
                            <View style={styles.modalMetaItem}>
                                <Text style={styles.modalSectionTitle}>Publicado</Text>
                                <Text style={styles.modalSectionText}>{book.publishedDate}</Text>
                            </View>
                            <View style={styles.modalMetaItem}>
                                <Text style={styles.modalSectionTitle}>Páginas</Text>
                                <Text style={styles.modalSectionText}>{book.pageCount}</Text>
                            </View>
                            {book.averageRating && (
                                <View style={styles.modalMetaItem}>
                                    <Text style={styles.modalSectionTitle}>Rating</Text>
                                    <Text style={styles.modalSectionText}>
                                        ⭐ {book.averageRating.toFixed(1)} ({book.ratingsCount})
                                    </Text>
                                </View>
                            )}
                        </View>

                        {/* Categories */}
                        {book.categories.length > 0 && (
                            <View style={styles.modalSection}>
                                <Text style={styles.modalSectionTitle}>Categorías</Text>
                                <Text style={styles.modalSectionText}>
                                    {book.categories.join(', ')}
                                </Text>
                            </View>
                        )}

                        {/* Description */}
                        <View style={styles.modalSection}>
                            <Text style={styles.modalSectionTitle}>Descripción</Text>
                            <Text style={styles.modalSectionText}>
                                {book.description}
                            </Text>
                        </View>

                        {/* Language */}
                        <View style={styles.modalSection}>
                            <Text style={styles.modalSectionTitle}>Idioma</Text>
                            <Text style={styles.modalSectionText}>
                                {book.language.toUpperCase()}
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

export default BookDetailModal;
