import { create } from 'zustand';
import { FilterType } from '../types/interface';

interface SearchStoreType {
  filteringInfo: FilterType;
  setFilteringInfo: (data: FilterType) => void;
  clearFilteringInfo: () => void;
}

export const useSearchStore = create<SearchStoreType>((set) => ({
  filteringInfo: {
    category: '',
    search: '',
    studyTimeRange: [0, 0],
    point: [1000, 50000],
  },
  setFilteringInfo: (data) => set({ filteringInfo: { ...data } }),
  clearFilteringInfo: () =>
    set({
      filteringInfo: {
        category: '',
        search: '',
        studyTimeRange: [0, 0],
        point: [1000, 50000],
      },
    }),
}));
