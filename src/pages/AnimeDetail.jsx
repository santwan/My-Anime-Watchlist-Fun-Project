import { useParams, Link } from "react-router-dom";
import animeList from "../data/animeList";

const AnimeDetail = () => {
  const { slug } = useParams();
  const anime = animeList.find((a) => a.slug === slug);

  if (!anime) return <p className="text-red-400">Anime not found.</p>;

  return (
    <div className="min-h-screen bg-bgDark text-white p-6">
      <Link to="/" className="text-accent underline">&larr; back</Link>
      <h1 className="text-3xl font-bold mt-4">{anime.title}</h1>
      {/* put poster, synopsis, etc. later */}
      <p className="mt-2 text-gray-400">Detail page coming soon…</p>
    </div>
  );
};

export default AnimeDetail;
