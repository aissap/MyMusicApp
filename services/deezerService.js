// services/deezerService.js
import axios from 'axios';

const DEEZER_API_URL = 'https://api.deezer.com';

export const searchTracks = async (query) => {
  try {
    const response = await axios.get(`${DEEZER_API_URL}/search`, {
      params: {
        q: query,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching tracks from Deezer:', error);
    return [];
  }
};

export const fetchPlaylists = async () => {
  try {
    const response = await axios.get(`${DEEZER_API_URL}/chart/0/playlists`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching playlists from Deezer:', error);
    return [];
  }
};
