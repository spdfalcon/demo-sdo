"use client";

import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const options: ISourceOptions = {
  fullScreen: false,
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  particles: {
    number: { value: 55, density: { enable: true, width: 900, height: 900 } },
    color: { value: ["#22d3ee", "#a78bfa", "#34d399"] },
    links: {
      enable: true,
      distance: 140,
      color: "#22d3ee",
      opacity: 0.12,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.6,
      direction: "none",
      random: true,
      outModes: { default: "out" },
    },
    opacity: { value: { min: 0.15, max: 0.45 } },
    size: { value: { min: 1, max: 2.5 } },
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: { enable: true, mode: "grab" },
      resize: { enable: true },
    },
    modes: {
      grab: { distance: 120, links: { opacity: 0.25 } },
    },
  },
  detectRetina: true,
};

import type { Engine } from "@tsparticles/engine";

async function initEngine(engine: Engine) {
  await loadSlim(engine);
}

export function ParticleBackground() {
  return (
    <ParticlesProvider init={initEngine}>
      <div className="pointer-events-none fixed inset-0 z-0 particles-layer">
        <Particles id="sdo-particles" options={options} className="h-full w-full" />
      </div>
    </ParticlesProvider>
  );
}
