import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import './styles/main.css'
import { useCallback, useMemo, useEffect, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { MoveDirection, OutMode } from "@tsparticles/engine";

export function Layout({ children }) {

  const containerRef = useRef(null), [ init, setInit ] = useState(false);
  useEffect(() => {
      if (init) {
          return;
      }

      initParticlesEngine(async (engine) => {
          await loadFull(engine);
      }).then(() => {
          setInit(true);
      });
  }, [ init ]);

  const particlesLoaded = useCallback(
      (container) => {
          containerRef.current = container;

          window.particlesContainer = container;
      },
      [ containerRef ]
  )

  const options = useMemo(
      () => ({
        background: {
          color: "#000",
      },
      particles: {
          number: {
              value: 300,
          },
          move: {
              direction: MoveDirection.none,
              enable: true,
              outModes: {
                  default: OutMode.out,
              },
              random: true,
              speed: 0.1,
              straight: false,
          },
          opacity: {
              animation: {
                  enable: true,
                  speed: 1,
                  sync: false,
              },
              value: { min: 0, max: 1 },
          },
          size: {
              value: { min: 1, max: 3 },
          },
      },
      interactivity: {
          events: {
                onClick: {
                    enable: true,
                    mode: "repulse",
                },              
          },
          modes: {
              bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
              },
              push: {
                  quantity: 4,
              },
              repulse: {
                  distance: 400,
                  duration: 4.0,
              },
          },
      },
  }),[]
  );

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
      <div className="container">
      <div ref={containerRef} className="relative">
      {init && (
              <Particles
                  id="tsparticles"
                  particlesLoaded={particlesLoaded}
                  options={options}
              />
          )}
      </div>
        {children}
        <ScrollRestoration />
        <Scripts />
      </div>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
