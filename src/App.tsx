import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState("");
  const apikey = import.meta.env.VITE_API_KEY;
  console.log(apikey);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(
          `http://www.omdbapi.com/?apikey=${apikey}&t=${search}`
        );
        // setFilms(await data.json())
        console.log(await data.json());
      } catch (error) {
        console.error(error);
      }
    })();
  });

  return (
    <div>
      <div className="w-[70%] bg-white">
        <div>
          <input placeholder="Search something to watch"/>
        </div>
        <div>
          <button></button>
        </div>
      </div>
      <div className="w-full h-[20px] bg-red-600"></div>
      {/* {films.map((item) => (
        <div></div>
      ))} */}
    </div>
  );
}

export default App;
