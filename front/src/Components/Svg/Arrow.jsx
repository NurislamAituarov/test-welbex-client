export function Arrow({ direction, fn }) {
  return (
    <svg
      onClick={() => fn(direction)}
      style={direction === 'right' ? { transform: 'rotateY(180deg)' } : { transform: 'rotateY(0)' }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  );
}
