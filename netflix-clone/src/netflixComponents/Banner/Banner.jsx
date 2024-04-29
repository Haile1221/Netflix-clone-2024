<script src="http://localhost:8097"></script>
import React, { useState, useEffect } from "react";
import './Banner.css';
import axios from "../../utils/axios";
import requests from "../../utils/requests";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
		(async () => {
      try{
			const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length)
				]);
      } catch(error){
        console.log("error", error);
      }
			
		})();
	}, []);

 
  return (
  	<div
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
				backgroundPosition: "center",
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				{/* <h1 className="banner__description">{truncate(movie?.overview,150)}</h1> */}
			</div>
			<div className="banner__fadeBottom" />
		</div>
  );
};

export default Banner;
