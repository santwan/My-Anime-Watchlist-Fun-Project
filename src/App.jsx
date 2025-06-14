import { Routes, Route } from "react-router-dom";
import animeList from "./data/animeList";
import AnimeCard from "./components/AnimeCard";
import AnimeDetail from "./pages/AnimeDetail";

const Home = () => (
  <div className="min-h-screen bg-black text-white">
    <header className="text-center py-8 text-4xl font-bold">Otaku No Hon</header>

    <main className="flex flex-col gap-6 px-4 max-w-4xl mx-auto">
      {animeList.map((anime) => (
        <AnimeCard key={anime.id} anime={anime} />
      ))}
    </main>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:slug" element={<AnimeDetail />} />
    </Routes>
  );
}

export default App;
