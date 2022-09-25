import React, { useState } from "react";
import axios from "axios";

const SEARCH_API =
	"https://api.themoviedb.org/3/search/movie?&api_key=30dfd22dce43f44612e1834264cac7ec&query=";

const Search = ({ setMovies }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleOnSubmit = (e) => {
		e.preventDefault();

		if (searchTerm) {
			axios.get(SEARCH_API + searchTerm).then((res) => {
				setMovies(res.data.results);
			});
			setSearchTerm("");
		}
	};

	const handleOnChange = (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<header className="search">
			<h1>Moviepedia</h1>
			<form onSubmit={handleOnSubmit}>
				<input
					type="text"
					placeholder="search movies..."
					value={searchTerm}
					onChange={handleOnChange}
				/>
			</form>
		</header>
	);
};

export default Search;
