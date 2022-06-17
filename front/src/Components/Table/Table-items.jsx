export function TableItems({ el }) {
  return (
    <div className="table">
      <div className="table__column">
        <p>{el.date}</p>
      </div>
      <div className="table__column">
        <p>{el.name}</p>
      </div>
      <div className="table__column">
        <p>{el.amount}</p>
      </div>
      <div className="table__column">
        <p>{el.distance}</p>
      </div>
    </div>
  );
}
