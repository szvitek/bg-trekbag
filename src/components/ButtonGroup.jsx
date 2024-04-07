import { useItemsStore } from '../stores/itemsStore';
import Button from './Button';


export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);
  const secondaryButtons = [
    { text: 'Mark all as complete', onClick: markAllAsComplete },
    { text: 'Mark all as incomplete', onClick: markAllAsIncomplete },
    { text: 'Reset to initial', onClick: resetToInitial },
    { text: 'Remove all items', onClick: removeAllItems },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map(({ text, onClick }) => (
        <Button key={text} variant="secondary" onClick={onClick}>
          {text}
        </Button>
      ))}
      {/* more newby way to create the buttons,
          leaving it here for reference:
        <Button variant="secondary" onClick={handleMarkAllAsComplete}>
          Mark all as complete
        </Button>
        <Button variant="secondary" onClick={handleMarkAllAsIncomplete}>
          Mark all as incomplete
        </Button>
        <Button variant="secondary" onClick={handleResetToInitial}>
          Reset to initial
        </Button>
        <Button variant="secondary" onClick={handleRemoveAllItems}>
          Remove all items
        </Button>
      */}
    </section>
  );
}
