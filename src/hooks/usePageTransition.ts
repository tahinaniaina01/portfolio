"use client";

import { create } from "zustand";

export type PageTransitionState = {
  animate: 0 | 1 | 2;
  setAnimate: (animate: 0 | 1 | 2) => void;
};

export const usePageTransitionStore = create<PageTransitionState>((set) => ({
  animate: 0,
  setAnimate: (animate: 0 | 1 | 2) => set(() => ({ animate: animate })),
}));
