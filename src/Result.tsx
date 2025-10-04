import type { Film } from "./App";
type ResultProps = {
  Film: Film;
};

function Result({ Film }: ResultProps) {
  return (
    <div className="w-[60%] flex justify-center rounded-2xl bg-gradient-to-bl from-red-600 to-blue-600">
      <div className=" w-[95%] flex flex-col mb-5">
        <div className="flex w-full">
          <div className="w-fit">
            <h1 className="textt text-2xl whitespace-nowrap">{Film.Title}</h1>
            <h2 className="textt whitespace-nowrap">{Film.Year} • {Film.Rated} • {Film.Runtime}</h2>
          </div>
          <div className="w-full flex justify-end">
            <div className="textt h-[50%] align-middle flex">
              <h1 className="p-2 mr-3">Rating: {Film.imdbRating}/10</h1>
            </div>
          </div>
        </div>
        <div className="w-full mb-3">
          <div>
            <img alt={`${Film.Title} Poster`} className="w-70 ml-5 hover:shadow-2xl" src={Film.Poster} />
          </div>
        </div>
        <div className="w-full">
          <div className="min-w-fit flex flex-row">
            {Film.Genre !== undefined ? (
              Film.Genre.split(",")
                .map((i) => i.split(" "))
                .flat()
                .filter((word) => word.length > 0)
                .map((element, _) => (
                  <h1
                    className="ml-5 my-1 flex justify-around border-2 rounded-3xl p-2 hover:bg-black/10 active:bg-black/30 select-none"
                    key={_}
                  >
                    {element}
                  </h1>
                ))
            ) : (
              <h1>Loading ...</h1>
            )}
          </div>
        </div>
        <div id="peoples">
          <div className="c-margins mb-4">
            <span>{Film.Plot}</span>
          </div>

          <div>
            <div className="c-margins">
              <div>Directors: {Film.Director}</div>
            </div>
            <hr />
            <div className="c-margins">
              <div>Writers: {Film.Writer}</div>
            </div>
            <hr />
            <div className="c-margins">
              <div>Actors: {Film.Actors}</div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Result;
