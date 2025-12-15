import { StyleSheet } from 'react-native';

export const colors = {
    primary: '#6366f1',      // Indigo
    primaryDark: '#4f46e5',  // Darker indigo
    secondary: '#8b5cf6',    // Purple
    background: '#0f172a',   // Dark blue-gray
    surface: '#1e293b',      // Lighter dark blue-gray
    text: '#f1f5f9',         // Light gray
    textSecondary: '#94a3b8', // Medium gray
    accent: '#ec4899',       // Pink
    error: '#ef4444',        // Red
    success: '#10b981',      // Green
    border: '#334155',       // Border gray
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 50,
    },
    header: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: colors.textSecondary,
    },
    searchContainer: {
        paddingHorizontal: 20,
        marginBottom: 16,
    },
    searchInput: {
        backgroundColor: colors.surface,
        borderRadius: 12,
        padding: 16,
        fontSize: 16,
        color: colors.text,
        borderWidth: 2,
        borderColor: colors.border,
    },
    searchInputFocused: {
        borderColor: colors.primary,
    },
    resultsContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
    },
    emptyContentContainer: {
        flexGrow: 1,
    },
    emptyStateContainer: {
        flex: 1,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    emptyText: {
        fontSize: 18,
        color: colors.textSecondary,
        textAlign: 'center',
        marginBottom: 8,
    },
    emptySubtext: {
        fontSize: 14,
        color: colors.textSecondary,
        textAlign: 'center',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 12,
        fontSize: 16,
        color: colors.textSecondary,
    },
    // Book Card Styles
    bookCard: {
        backgroundColor: colors.surface,
        borderRadius: 12,
        marginBottom: 16,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.border,
    },
    bookCardContent: {
        flexDirection: 'row',
        padding: 16,
    },
    bookThumbnailContainer: {
        width: 80,
        height: 120,
        marginRight: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: colors.background,
    },
    bookThumbnail: {
        width: '100%',
        height: '100%',
    },
    bookThumbnailPlaceholder: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primaryDark,
    },
    bookThumbnailPlaceholderText: {
        fontSize: 40,
        color: colors.text,
    },
    bookInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    bookTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: 4,
    },
    bookAuthors: {
        fontSize: 14,
        color: colors.textSecondary,
        marginBottom: 8,
    },
    bookMeta: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    bookMetaText: {
        fontSize: 12,
        color: colors.textSecondary,
        marginRight: 12,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        fontSize: 12,
        color: colors.accent,
        marginRight: 4,
    },
    // Modal Styles
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: colors.surface,
        borderRadius: 16,
        padding: 24,
        width: '90%',
        maxHeight: '80%',
        borderWidth: 1,
        borderColor: colors.border,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    modalCloseButton: {
        padding: 4,
    },
    modalCloseText: {
        fontSize: 24,
        color: colors.textSecondary,
        fontWeight: 'bold',
    },
    modalBody: {
        flex: 1,
    },
    modalThumbnailContainer: {
        alignSelf: 'center',
        width: 150,
        height: 225,
        marginBottom: 20,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: colors.background,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: 8,
    },
    modalAuthors: {
        fontSize: 16,
        color: colors.secondary,
        marginBottom: 16,
    },
    modalSection: {
        marginBottom: 16,
    },
    modalSectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.textSecondary,
        textTransform: 'uppercase',
        marginBottom: 4,
    },
    modalSectionText: {
        fontSize: 14,
        color: colors.text,
        lineHeight: 20,
    },
    modalMetaGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    modalMetaItem: {
        flex: 1,
    },
    // History Screen Styles
    headerActions: {
        paddingHorizontal: 20,
        marginBottom: 16,
    },
    clearButton: {
        alignSelf: 'flex-end',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    clearButtonText: {
        color: colors.error,
        fontSize: 14,
        fontWeight: '600',
    },
    historyListContainer: {
        paddingHorizontal: 20,
    },
    historyItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.surface,
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: colors.border,
        overflow: 'hidden',
    },
    historyItemContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    historyIcon: {
        fontSize: 20,
        marginRight: 12,
    },
    historyText: {
        flex: 1,
        fontSize: 16,
        color: colors.text,
    },
    historyDeleteButton: {
        padding: 16,
        paddingLeft: 12,
    },
    historyDeleteText: {
        fontSize: 24,
        color: colors.error,
        fontWeight: 'bold',
    },
    // Tab Navigator Styles
    tabBar: {
        backgroundColor: colors.surface,
        borderTopColor: colors.border,
        borderTopWidth: 1,
    },
    // Detail Screen Styles
    detailHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    backButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    backButtonText: {
        fontSize: 16,
        color: colors.primary,
        fontWeight: '600',
    },
    detailScrollContent: {
        paddingHorizontal: 20,
        paddingVertical: 24,
    },
    detailThumbnailContainer: {
        alignSelf: 'center',
        width: 200,
        height: 300,
        marginBottom: 24,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: colors.background,
    },
    detailThumbnail: {
        width: '100%',
        height: '100%',
    },
    detailTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: 8,
        textAlign: 'center',
    },
    detailAuthors: {
        fontSize: 18,
        color: colors.secondary,
        marginBottom: 24,
        textAlign: 'center',
    },
    detailMetaGrid: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 24,
        paddingVertical: 16,
        backgroundColor: colors.surface,
        borderRadius: 12,
    },
    detailMetaItem: {
        alignItems: 'center',
    },
    detailMetaLabel: {
        fontSize: 12,
        color: colors.textSecondary,
        textTransform: 'uppercase',
        marginBottom: 4,
    },
    detailMetaValue: {
        fontSize: 14,
        color: colors.text,
        fontWeight: '600',
    },
    detailSection: {
        marginBottom: 20,
    },
    detailSectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.textSecondary,
        textTransform: 'uppercase',
        marginBottom: 8,
    },
    detailSectionText: {
        fontSize: 15,
        color: colors.text,
        lineHeight: 22,
    },
});
