import React, { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';
import { Live2DModelConfig } from '../types';

interface Live2DModelProps {
  config: Live2DModelConfig;
  className?: string;
}

export const Live2DModel: React.FC<Live2DModelProps> = ({ config, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pixiAppRef = useRef<PIXI.Application | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize PIXI Application
    pixiAppRef.current = new PIXI.Application({
      width: config.width || 800,
      height: config.height || 600,
      backgroundColor: 0xffffff,
      antialias: true,
      resolution: window.devicePixelRatio || 1,
    });

    containerRef.current.appendChild(pixiAppRef.current.view as HTMLCanvasElement);

    // TODO: Initialize Live2D model using CubismWebFramework
    // This will be implemented once we have access to the local dependency

    return () => {
      if (pixiAppRef.current) {
        pixiAppRef.current.destroy(true);
      }
    };
  }, [config]);

  return <div ref={containerRef} className={className} />;
};


