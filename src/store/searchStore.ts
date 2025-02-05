import { create } from 'zustand';

interface SearchStoreType {
  filteringInfo: {
    category: string;
    search: string;
    studyTimeRange: [number, number];
    point: [number, number];
  };
  setFilteringInfo: (data: {
    category: string;
    search: string;
    studyTimeRange: [number, number];
    point: [number, number];
  }) => void;
}

export const useSearchStore = create<SearchStoreType>((set) => ({
  filteringInfo: {
    category: '',
    search: '',
    studyTimeRange: [0, 0],
    point: [0, 0],
  },
  setFilteringInfo: (data) => set({ filteringInfo: { ...data } }),
}));
