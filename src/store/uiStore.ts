import { create } from 'zustand'

interface UIState {
  isMobileMenuOpen: boolean
  isSuccessModalOpen: boolean
  openMobileMenu: () => void
  closeMobileMenu: () => void
  toggleMobileMenu: () => void
  openSuccessModal: () => void
  closeSuccessModal: () => void
}

export const useUIStore = create<UIState>((set) => ({
  isMobileMenuOpen: false,
  isSuccessModalOpen: false,
  openMobileMenu: () => set({ isMobileMenuOpen: true }),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  openSuccessModal: () => set({ isSuccessModalOpen: true }),
  closeSuccessModal: () => set({ isSuccessModalOpen: false }),
}))
