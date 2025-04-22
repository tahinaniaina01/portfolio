"use client";

import { create } from "zustand";

export type PageTransitionState = {
  animate: boolean;
  setAnimate: (animate: boolean) => void;
};

export const usePageTransitionStore = create<PageTransitionState>((set) => ({
  animate: true,
  setAnimate: (animate: boolean) => set(() => ({ animate: animate })),
}));
