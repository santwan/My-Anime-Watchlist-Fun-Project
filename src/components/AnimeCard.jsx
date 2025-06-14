import { Link } from "react-router-dom";

const AnimeCard = ({ anime }) => {
  return (
    <Link
      to={`/${anime.slug}`}
      className="block w-full select-none transform hover:scale-[1.02] transition duration-300"
    >
      <div className="bg-cardDark rounded-pill px-6 py-4 flex items-center justify-between gap-4 shadow">
        {/* Left — title & rating */}
        <div>
          <h2 className="text-xl font-bold text-white">{anime.title}</h2>
          <p className="text-sm text-gray-400">
            My Rating: <span className="text-yellow-400">⭐ {anime.rating}</span>
          </p>
        </div>

        {/* Right — genre tags */}
        <div className="flex flex-wrap gap-2">
          {anime.genre.map((g) => (
            <span
              key={g}
              className="text-xs font-semibold bg-accent/20 text-accent px-3 py-1 rounded-full"
            >
              {g}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;
