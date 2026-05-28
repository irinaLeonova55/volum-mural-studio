import { useEffect, useState } from 'react';
import { useFilter } from '../components/FilterContext';
import { artworks as initialArtworks } from '../data/artworks';
import type { Artwork } from '../data/artworks';
import type { Dispatch, SetStateAction } from 'react';
import searchIcon from '../assets/icons/search.svg';
import SortBox from '../components/SortBox';
import Button from '../components/Button';

interface FilterProps {
  setOpenFilters?: Dispatch<SetStateAction<boolean>>;
}

const Filters = ({ setOpenFilters }: FilterProps) => {
  const {
    searchQuery,
    setSearchQuery,
    selectedTechnique,
    setSelectedTechnique,
    selectedSpaceType,
    setSelectedSpaceType,
    selectedKeywords,
    setSelectedKeywords,
  } = useFilter();

  const [artworks] = useState<Artwork[]>(initialArtworks);
  const [openTechnique, setOpenTechnique] = useState<boolean>(false);
  const [openSpaceType, setOpenSpaceType] = useState<boolean>(false);

  const spaceTypes = Array.from(
    new Set(artworks.map((artwork) => artwork.spaceType)),
  );

  const techniques = Array.from(
    new Set(artworks.map((artwork) => artwork.technique)),
  );

  const keywords = [
    ...new Set(artworks.flatMap((artwork) => artwork.keywords)),
  ];

  const handleChangeSpaceType = (spaceType: string) => {
    setSelectedSpaceType((prev) => (prev === spaceType ? '' : spaceType));
  };

  const handleChangeTechnique = (technique: string) => {
    setSelectedTechnique((prev) => (prev === technique ? '' : technique));
  };

  const handleKeyword = (keyword: string) => {
    setSelectedKeywords((prev) =>
      prev.includes(keyword)
        ? prev.filter((item) => item !== keyword)
        : [...prev, keyword],
    );
  };

  useEffect(() => {
    console.log('selectedKeywords', selectedKeywords);
  });

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedTechnique('');
    setSelectedSpaceType('');
    setSelectedKeywords([]);
    setOpenSpaceType(false);
    setOpenTechnique(false);
    setOpenFilters?.(false);
  };

  return (
    <section>
      <div className="flex justify-between items-end border-b border-[#D8D8D8] py-3 mb-6">
        <input
          type="text"
          className="text-[#707070] font-medium w-full focus:outline-none"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <img src={searchIcon} alt="Search" className="w-5 h-auto" />
      </div>

      <SortBox
        title="Technique"
        items={techniques}
        isOpen={openTechnique}
        selectedValue={selectedTechnique}
        onToggle={() => setOpenTechnique(!openTechnique)}
        onChange={handleChangeTechnique}
      />
      <SortBox
        title="Space Type"
        items={spaceTypes}
        isOpen={openSpaceType}
        selectedValue={selectedSpaceType}
        onToggle={() => setOpenSpaceType(!openSpaceType)}
        onChange={handleChangeSpaceType}
      />

      <div className="mb-6 mt-12">
        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword) => (
            <button
              key={keyword}
              onClick={() => handleKeyword(keyword)}
              className={`
      flex items-center rounded-sm border px-4 py-1
      font-medium cursor-pointer transition-colors duration-200
      ${
        selectedKeywords.includes(keyword)
          ? 'border-[#A18A68] text-[#A18A68]'
          : 'border-[#D8D8D8] text-[#707070] hover:border-[#A18A68] hover:text-[#A18A68]'
      }
    `}
            >
              {keyword}
            </button>
          ))}
        </div>
      </div>

      <Button onClick={handleResetFilters} text="Reset Filters" />
    </section>
  );
};

export default Filters;
