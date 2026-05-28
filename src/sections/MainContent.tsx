import { useEffect, useMemo, useState } from 'react';
import { useFilter } from '../components/FilterContext';
import BookCard from '../components/BookCard';
import { artworks as initialArtworks } from '../data/artworks';
import type { Artwork } from '../data/artworks';
import previousArrow from '../assets/icons/previous-arrow.svg';
import nextArrow from '../assets/icons/next-arrow.svg';

const MainContent = () => {
  const {
    searchQuery,
    selectedSpaceType,
    selectedTechnique,
    selectedKeywords,
  } = useFilter();

  const [artworks] = useState<Artwork[]>(initialArtworks);

  const [currentPage, setCurrentPage] = useState(1);

  const itemPerPage = 6;

  const filteredArtworks = useMemo(() => {
    let result = artworks;

    if (selectedSpaceType) {
      result = result.filter(
        (artwork) => artwork.spaceType === selectedSpaceType,
      );
    }

    if (selectedTechnique) {
      result = result.filter(
        (artwork) => artwork.technique === selectedTechnique,
      );
    }

    if (searchQuery) {
      const query = searchQuery.trim().toLowerCase();

      result = result.filter(
        (artwork) =>
          artwork.title.toLowerCase().includes(query) ||
          artwork.spaceType.toLowerCase().includes(query) ||
          artwork.technique.toLowerCase().includes(query) ||
          artwork.description.toLowerCase().includes(query) ||
          artwork.location.toLowerCase().includes(query) ||
          artwork.year.toString().includes(query),
      );
    }

    if (selectedKeywords.length > 0) {
      result = result.filter((artwork) =>
        artwork.keywords.some((keyword) => selectedKeywords.includes(keyword)),
      );
    }

    return result;
  }, [
    artworks,
    selectedSpaceType,
    selectedTechnique,
    searchQuery,
    selectedKeywords,
  ]);

  const totalProducts = filteredArtworks.length;

  const totalPages = Math.max(1, Math.ceil(totalProducts / itemPerPage));

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  //пагинация
  const getPaginagionButtons = () => {
    const buttons: number[] = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage <= 2) {
      endPage = Math.min(totalPages, 5);
    }

    if (currentPage >= totalPages - 1) {
      startPage = Math.max(1, totalPages - 4);
    }

    for (let page = startPage; page <= endPage; page++) {
      buttons.push(page);
    }

    return buttons;
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTechnique, searchQuery, selectedSpaceType]);

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  const currentArtworks = filteredArtworks.slice(startIndex, endIndex);

  return (
    <section className="w-full flex flex-col min-h-screen">
      <div className="mb-5 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentArtworks.map((artwork) => (
            <BookCard
              key={artwork.id}
              id={artwork.id}
              title={artwork.title}
              image={artwork.heroImage}
              spaceTypeText={artwork.spaceTypeText}
              technique={artwork.technique}
              slug={artwork.slug}
              extrastyle="h-65"
            />
          ))}
        </div>

        <div className="flex gap-2 justify-center items-center mt-5 mx-auto">
          {/*previous*/}
          {currentPage !== 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex justify-center items-center cursor-pointer mr-2 opacity-50"
            >
              <img src={previousArrow} alt="Previous" className="w-2 h-auto" />
            </button>
          )}
          {/*1, 2, 3*/}
          <div className="flex flex-wrap justify-center">
            {getPaginagionButtons().map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`border w-8 h-8 mx-1 text-xs rounded-sm font-medium cursor-pointer border-black ${page === currentPage ? 'bg-black text-white' : 'bg-transparent text-black'}`}
              >
                {page}
              </button>
            ))}
          </div>
          {/*next*/}
          {currentPage !== totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex justify-center items-center cursor-pointer ml-2 opacity-50"
            >
              <img src={nextArrow} alt="Next" className="w-2 h-auto" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainContent;
