/**
 * Google Books API Service
 * Provides functions to interact with Google Books API
 */

const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes';

/**
 * Search for books using Google Books API
 * @param {string} query - Search query string
 * @param {number} maxResults - Maximum number of results to return (default: 20)
 * @returns {Promise<Array>} Array of book objects
 */
export const searchBooks = async (query, maxResults = 20) => {
  if (!query || query.trim() === '') {
    return [];
  }

  try {
    const url = `${GOOGLE_BOOKS_API}?q=${encodeURIComponent(query)}&maxResults=${maxResults}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.items) {
      return [];
    }

    // Transform the data to a more usable format
    return data.items.map(item => {
      // Get thumbnail URL and force HTTPS (Android blocks HTTP by default)
      let thumbnailUrl = item.volumeInfo.imageLinks?.thumbnail || item.volumeInfo.imageLinks?.smallThumbnail || null;
      if (thumbnailUrl && thumbnailUrl.startsWith('http:')) {
        thumbnailUrl = thumbnailUrl.replace('http:', 'https:');
      }

      return {
        id: item.id,
        title: item.volumeInfo.title || 'Sin título',
        authors: item.volumeInfo.authors || ['Autor desconocido'],
        description: item.volumeInfo.description || 'Sin descripción disponible',
        publishedDate: item.volumeInfo.publishedDate || 'Fecha desconocida',
        thumbnail: thumbnailUrl,
        pageCount: item.volumeInfo.pageCount || 'N/A',
        categories: item.volumeInfo.categories || [],
        language: item.volumeInfo.language || 'N/A',
        previewLink: item.volumeInfo.previewLink || null,
        averageRating: item.volumeInfo.averageRating || null,
        ratingsCount: item.volumeInfo.ratingsCount || 0,
      };
    });
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};
