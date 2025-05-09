"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

export default function LoadingProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Simuler la progression du chargement
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        // Augmenter plus rapidement au début, puis ralentir vers la fin
        const increment = prevProgress < 70 ? 10 : prevProgress < 90 ? 3 : 1;
        const nextProgress = Math.min(prevProgress + increment, 99);
        return nextProgress;
      });
    }, 200);

    // Détecter quand la page est complètement chargée
    const handleLoad = () => {
      clearInterval(interval);
      setProgress(100);
      // Masquer l'indicateur après un court délai
      setTimeout(() => setVisible(false), 500);
    };

    // Attendre que tout soit chargé
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <div className="w-64 space-y-4 text-center">
        <h2 className="text-xl font-semibold">Chargement...</h2>
        <Progress value={progress} className="h-2 w-full" />
        <p className="text-sm text-muted-foreground">{progress}%</p>
      </div>
    </div>
  );
}
