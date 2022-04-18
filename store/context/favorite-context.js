import React, { useState,useContext } from 'react';

const FavoriteContext = React.createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoriteProvider({ children }) {
  const [favMealsIds, setFavMealsIds] = useState([]);

  function addFav(id) {
    setFavMealsIds((prev) => [...prev, id]);
  }

  function removeFav(id) {
    setFavMealsIds((prev) => prev.filter((item) => item !== id));
  }

  const value = { ids: favMealsIds, addFav: addFav, removeFav: removeFav };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

function useGlobalContext() {
  return useContext(FavoriteContext);
}

export { FavoriteProvider, useGlobalContext };
