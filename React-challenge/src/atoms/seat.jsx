export default function Seat({ id, isOccupied, isSelected, onSelect }) {
  const handleClick = () => {
    if (!isOccupied) {
      onSelect(id);
    }
  };

  const getSeatClass = () => {
    if (isOccupied) return 'seat occupied';
    if (isSelected) return 'seat selected';
    return 'seat available';
  };

  return (
    <div 
      className={getSeatClass()}
      onClick={handleClick}
    >
      {id}
    </div>
  );
}