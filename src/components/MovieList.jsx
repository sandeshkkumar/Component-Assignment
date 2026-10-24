// Q11: Movies list using map()
import MovieCard from "./MovieCard";

const movies = [
  { id: 1, name: "3 Idiots", genre: "Comedy/Drama", year: 2009 },
  { id: 2, name: "Dangal", genre: "Biography/Sports", year: 2016 },
  { id: 3, name: "Baahubali 2", genre: "Action", year: 2017 },
  { id: 4, name: "Inception", genre: "Sci-Fi", year: 2010 },
  { id: 5, name: "Interstellar", genre: "Sci-Fi", year: 2014 },
];

function MovieList() {
  return (
    <div className="grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          name={movie.name}
          genre={movie.genre}
          year={movie.year}
        />
      ))}
    </div>
  );
}

export default MovieList;
