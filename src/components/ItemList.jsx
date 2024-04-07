import EmptyView from './EmptyView';

export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}
      {items.map((item) => (
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
