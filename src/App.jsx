import AnimeCard from "./components/AnimeCard";
import animeList from "./data/animeList";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="text-center py-6 text-4xl font-bold">
        My Anime Watchlist
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {animeList.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </main>

      <footer className="text-center mt-8 p-4 text-sm text-gray-400 italic">
        "Anime is not a genre, it's an emotion."
      </footer>
    </div>
  );
}

export default App;
