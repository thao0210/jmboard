import React, { createContext, useContext, useState } from 'react';

const CategoryContext = createContext(null);

export const CategoryProvider = ({ children }) => {
  const [selected, setSelected] = useState(null);

  return (
    <CategoryContext.Provider value={{ selected, setSelected }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);