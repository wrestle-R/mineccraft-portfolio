import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { useTheme } from './context/ThemeContext';
import { MAIN_PORTFOLIO_URL } from './lib/domain-utils';
import SceneBoundary from '../minecraft/components/SceneBoundary';
import landscape from '../minecraft/assets/textures/loading-world.jpg';
import '../minecraft/minecraft.css';
import './not-found.css';

const HouseScene = lazy(() => import('../minecraft/scene/HouseScene'));

export default function NotFound() {
  const { theme } = useTheme();
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const worldReady = useCallback(() => setReady(true), []);
  const worldFailed = useCallback(() => setFailed(true), []);

  useEffect(() => {
    document.title = '404 · Unexplored chunk · Russel’s World';
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return (
    <main className="mc-root mc-not-found" data-minecraft-theme={theme}>
      <div className={`mc-lost-world ${ready && !failed ? 'is-ready' : ''}`} aria-hidden="true" inert>
        <img className="mc-lost-landscape" src={landscape} alt="" />
        {!reducedMotion && !failed && <SceneBoundary onFailure={worldFailed}>
          <Suspense fallback={null}>
            <HouseScene presentation onReady={worldReady} onFailure={worldFailed} />
          </Suspense>
        </SceneBoundary>}
      </div>

      <nav className="mc-lost-nav" aria-label="Return links">
        <a className="mc-lost-brand" href="/">
          <span className="mc-lost-mark" aria-hidden="true">R</span>
          <span>RUSSEL’S WORLD<span className="mc-lost-edition">PORTFOLIO EDITION</span></span>
        </a>
        <a className="mc-lost-portfolio" href={MAIN_PORTFOLIO_URL}>Main portfolio <span aria-hidden="true">↗</span></a>
      </nav>

      <div className="mc-lost-message">
        <p className="mc-lost-eyebrow"><span aria-hidden="true" /> UNEXPLORED CHUNK</p>
        <h1><span className="mc-lost-code">404</span><span className="mc-lost-title">This chunk doesn’t exist.</span></h1>
        <p className="mc-lost-copy">You wandered a little beyond the map.<br />There’s still a whole world back at the house.</p>
        <a className="mc-lost-return" href="/minecraft"><span aria-hidden="true">⌂</span> Back to the world <span aria-hidden="true">↗</span></a>
      </div>

      <footer className="mc-lost-footer"><span>RDP · OVERWORLD</span><span>LET’S GET YOU HOME <span aria-hidden="true">↗</span></span></footer>
    </main>
  );
}
