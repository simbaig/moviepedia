import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./components/Movie";
import Search from "./components/Search";

const FEATURED_API =
	"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=30dfd22dce43f44612e1834264cac7ec&page=1";

const App = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get(FEATURED_API).then((res) => {
			setMovies(res.data.results);
		});
	}, []);

	return (
		<>
			<Search setMovies={setMovies} />
			<div className="movie-container">
				{movies.length > 0 &&
					movies.map((movie) => <Movie key={movie.id} {...movie} />)}
			</div>
		</>
	);
};

export default App;
