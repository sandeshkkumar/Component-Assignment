// Q11: Reusable MovieCard
function MovieCard({ name, genre, year }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Genre: {genre}</p>
      <p>Released: {year}</p>
    </div>
  );
}

export default MovieCard;
