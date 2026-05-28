import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { artworks } from '../data/artworks';
import Button from '../components/Button';

{
  /*interface Artwork {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
  slug: string;
}*/
}

const ArtworkPage = () => {
  const { slug } = useParams<{ id: string; slug: string }>();
  const navigate = useNavigate();

  const artwork = artworks.find((item) => item.slug === slug);

  if (!artwork) {
    return <div>Project not found</div>;
  }

  const currentIndex = artworks.findIndex((item) => item.id === artwork.id);

  const nextArtwork = artworks[currentIndex + 1] || artworks[0];

  useEffect(() => {
    console.log('nextArtwork', nextArtwork);
  });

  return (
    <div className="w-full h-full pb-12">
      <img
        src={artwork.heroImage}
        alt={artwork.title}
        className="w-full h-[70svh] lg:h-[90vh] object-cover object-center mb-5"
      />
      <section className="max-w-318 px-4 mx-auto py-12">
        <div className="w-full mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-xs text-[#707070] uppercase font-medium cursor-pointer"
          >
            ← Back
          </button>
        </div>
        <h1 className="text-4xl text-center font-medium mb-10">
          {artwork.title}
        </h1>
        <div className="flex justify-center items-center mx-auto flex-col w-full max-w-160 gap-10">
          <p className="text-base">{artwork.description}</p>
          <div className="w-full flex flex-col items-start text-base">
            <p>Space — {artwork.spaceTypeText}</p>
            <p>Technique — {artwork.technique}</p>
            <p>Location — {artwork.location}</p>
            <p>Year — {artwork.year}</p>
          </div>
        </div>
        <div className="mx-auto mt-20 w-full flex items-center flex-col">
          <h2 className="text-xl font-medium">
            Interested in a custom mural project?
          </h2>
          <div className="max-w-80 w-full">
            <Button text="Discuss Project" />
          </div>
        </div>
      </section>
      <section className="max-w-360 px-2 mx-auto py-12">
        <div className="relative w-full h-auto">
          <div className="absolute w-full h-auto rounded-xl inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent)"></div>
          <img
            src={nextArtwork.heroImage}
            alt={nextArtwork.title}
            loading="lazy"
            className="w-full bg-cover h-auto rounded-xl transform-gpu animate-[cinematic_14s_ease-in-out_infinite]"
          />
          <div className="absolute flex justify-center items-center text-white bottom-8 w-full">
            <div className="max-w-80 w-full">
              <Button
                href={`/collection/${nextArtwork.slug}`}
                text="Next project &rarr;"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtworkPage;
