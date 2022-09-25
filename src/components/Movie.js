import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
	if (vote >= 8) {
		return "green";
	} else if (vote >= 6) {
		return "orange";
	} else {
		return "red";
	}
};

const Movie = ({ title, poster_path, overview, vote_average }) => {
	return (
		<div className="movie">
			<img
				src={
					poster_path
						? IMG_API + poster_path
						: "https://images.unsplash.com/photo-1562448079-b5631888445f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxtb3ZpZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
				}
				alt={title}
			/>
			<div className="movie-info">
				<h3>{title}</h3>
				<span className={`tag ${setVoteClass(vote_average)}`}>
					{vote_average}
				</span>
			</div>

			<div className="movie-over">
				<h2>Overview:</h2>
				<p>{overview}</p>
			</div>
		</div>
	);
};

export default Movie;
