import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//featured : "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=30dfd22dce43f44612e1834264cac7ec=1"
//images: "https://image.tmdb.org/t/p/w1280"
//search: "https://api.themoviedb.org/3/search/movie?&api_key=30dfd22dce43f44612e1834264cac7ec&query="

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
