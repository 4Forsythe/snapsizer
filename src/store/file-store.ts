import { create } from 'zustand'

interface FileStoreState {
  files: File[]
  setFiles: (files: File[]) => void
  removeFiles: () => void
}

export const useFileStore = create<FileStoreState>((set) => ({
  files: [],
  setFiles: (files) => set({ files }),
  removeFiles: () => set({ files: [] }),
}))
