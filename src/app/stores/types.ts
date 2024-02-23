export interface HomeState {
  selectedItem: string;
}

export interface HomeActions {
  setSelectedItem: (item: string) => void;
}
