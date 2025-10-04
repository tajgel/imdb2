import { useEffect, useState } from "react";
import "./App.css";
import Result from "./Result";

export type Film = {
  Actors: string,
  Awards: string,
  BoxOffice: string,
  Country: string,
  DVD: string,
  Director: string,
  Genre: string,
  Language: string,
  Metascore: string,
  Plot: string,
  Poster: string,
  Production: string,
  Rated: number,
  Ratings: [{Source: string, Value: string}],
  Released: string,
  Runtime: string,
  Title: string,
  Type: string,
  Website: string,
  Writer: string,
  Year: number,
  imdbID: string,
  imdbRating: string,
  imdbVotes: string
}

function App() {
  const [films, setFilms] = useState<Film>();
  const [search, setSearch] = useState("");
  const [runSearch, setRunSearch] = useState(false)
  const [displayFilm, setDisplayFilm] = useState(false)
  const apikey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(
          `http://www.omdbapi.com/?apikey=${apikey}&t=${search}`
        );
        setFilms(await data.json())
      } catch (error) {
        console.error(error);
      }
    })();
  }, [runSearch]);
  console.log(films)

  return (
    <div className="w-full flex min-h-4">
      <section className="w-full">
        <search className="mb-3">
          <form className="w-full flex justify-center" role="search" onSubmit={(e) => e.preventDefault()}>
            <div className="w-[40%]">
              <input
                type="search"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search something to watch"
                className="w-full bg-amber-200  text-black rounded-l-2xl h-13"
              />
            </div>
            <div className=" flex">
              <button className="hover:bg-amber-300 active:bg-amber-700 bg-amber-50 text-black rounded-r-2xl" onClick={() => {setRunSearch((prev) => !prev); setDisplayFilm(true)}}>
                search
              </button>
            </div>
          </form>
        </search>
        <div className="flex w-full justify-center">
          {displayFilm ? <Result Film={films!}/> : null}
        </div>
      </section>
    </div>
  );
}

export default App;
