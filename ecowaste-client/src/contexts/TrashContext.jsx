import React, { createContext, useState } from 'react';

export const TrashContext = createContext();

export function TrashProvider({ children }) {
  const [collections, setCollections] = useState([]);

  const addCollection = (collection) => {
    setCollections((prev) => [...prev, collection]);
  };

  return (
    <TrashContext.Provider value={{ collections, addCollection }}>
      {children}
    </TrashContext.Provider>
  );
}
