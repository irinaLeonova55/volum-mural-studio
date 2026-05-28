import { createContext, useContext, useState } from 'react';
import type { ReactNode, Dispatch, SetStateAction } from 'react';

interface FilterContextType {
  searchQuery: string;

  setSearchQuery: (query: string) => void;

  selectedSpaceType: string;
  setSelectedSpaceType: Dispatch<SetStateAction<string>>;
  selectedTechnique: string;
  setSelectedTechnique: Dispatch<SetStateAction<string>>;
  selectedKeywords: string[];
  setSelectedKeywords: Dispatch<SetStateAction<string[]>>;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSpaceType, setSelectedSpaceType] = useState<string>('');
  const [selectedTechnique, setSelectedTechnique] = useState<string>('');

  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  return (
    <FilterContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        selectedSpaceType,
        setSelectedSpaceType,
        selectedTechnique,
        setSelectedTechnique,
        selectedKeywords,
        setSelectedKeywords,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);

  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }

  return context;
};
