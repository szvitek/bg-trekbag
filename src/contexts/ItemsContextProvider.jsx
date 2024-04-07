import { createContext, useEffect, useState } from 'react';
import { initialItems } from '../lib/constants';

export const ItemsContext = createContext();

/*
The Context API has 1 big downside: no selectors. This means that if
anything in the context value changes, all components that use that
context value will re-render, even if they don't use the value that
changed. This is not good for performance. We can solve this with
Zustand or Redux.
*/
export default function ItemsContextProvider({ children }) {
  // optimization: If you pass a function to useState, React will only call it during initialization.
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem('items')) || initialItems
  );

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }

      return item;
    });
    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    setItems(
      items.map((item) => ({
        ...item,
        packed: true,
      }))
    );
  };

  const handleMarkAllAsIncomplete = () => {
    setItems(
      items.map((item) => ({
        ...item,
        packed: false,
      }))
    );
  };

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleToggleItem,
        handleRemoveAllItems,
        handleResetToInitial,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
