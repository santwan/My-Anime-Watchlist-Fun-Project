const AnimeCard = ({ anime }) => {
    return (
      <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden transition hover:scale-105 duration-300">
        <img src={anime.image} alt={anime.title} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold text-white">{anime.title}</h2>
          <p className="text-sm text-gray-400">{anime.genre.join(", ")}</p>
          <p className="text-yellow-400 font-semibold mt-1">⭐ {anime.rating}</p>
        </div>
      </div>
    );
  };
  
  export default AnimeCard;
  