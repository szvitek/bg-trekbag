import Button from './Button';

export default function ButtonGroup({
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
  const secondaryButtons = [
    { text: 'Mark all as complete', onClick: handleMarkAllAsComplete },
    { text: 'Mark all as incomplete', onClick: handleMarkAllAsIncomplete },
    { text: 'Reset to initial', onClick: handleResetToInitial },
    { text: 'Remove all items', onClick: handleRemoveAllItems },
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
