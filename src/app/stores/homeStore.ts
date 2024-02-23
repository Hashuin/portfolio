import create from 'zustand';
import { HomeState, HomeActions } from './types';

const useHomeStore = create<HomeState & HomeActions>((set) => ({
  selectedItem: 'Acerca de mí',
  setSelectedItem: (item) => set({ selectedItem: item }),
}));

export default useHomeStore;
