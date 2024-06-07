// context/LikedSongsContext.js
import React, { createContext, useState } from 'react';

export const LikedSongsContext = createContext();

export const LikedSongsProvider = ({ children }) => {
  const [likedSongs, setLikedSongs] = useState([]);

  const likeSong = (song) => {
    setLikedSongs([...likedSongs, song]);
  };

  const unlikeSong = (song) => {
    setLikedSongs(likedSongs.filter(s => s.id !== song.id));
  };

  return (
    <LikedSongsContext.Provider value={{ likedSongs, likeSong, unlikeSong }}>
      {children}
    </LikedSongsContext.Provider>
  );
};
