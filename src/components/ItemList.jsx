import Select from 'react-select';
import EmptyView from './EmptyView';
import { useState } from 'react';

const sortingOptions = [
  { value: 'default', label: 'Sort by default' },
  { value: 'packed', label: 'Sort by packed' },
  { value: 'unpacked', label: 'Sort by unpacked' },
];

export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  const [sortBy, setSortBy] = useState('default');
  // or .toSorted() instead of spreading
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'packed') {
      return b.packed - a.packed;
    }

    if (sortBy === 'unpacked') {
      return a.packed - b.packed;
    }

    return;
  });

  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}

      {items.length > 0 ? (
        <section className="sorting">
          <Select
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      ) : null}

      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
        />
      ))}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          checked={item.packed}
          type="checkbox"
          onChange={() => onToggleItem(item.id)}
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
