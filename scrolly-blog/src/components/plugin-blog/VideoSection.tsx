import { useEffect, useRef } from 'react';
import { AnimatedSection } from '../common/AnimatedSection';

/* eslint-disable @typescript-eslint/no-explicit-any */
type YTPlayer = any;

export const VideoSection = () => {
  const playerRef = useRef<YTPlayer>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const w = window as any;

    const loadAPI = () => {
      if (w.YT && w.YT.Player) {
        createPlayer();
        return;
      }

      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(tag);

      w.onYouTubeIframeAPIReady = createPlayer;
    };

    const createPlayer = () => {
      if (!containerRef.current || playerRef.current) return;

      playerRef.current = new w.YT.Player(containerRef.current, {
        width: '100%',
        height: '100%',
        videoId: 'Ke_J3pOdL8k',
        playerVars: { start: 575, rel: 0 },
        events: {
          onStateChange: (e: any) => {
            if (e.data === w.YT.PlayerState.PLAYING) pollEnd();
          },
        },
      });
    };

    const pollEnd = () => {
      if (!playerRef.current || !playerRef.current.getCurrentTime) return;
      if (playerRef.current.getCurrentTime() >= 1125) {
        playerRef.current.pauseVideo();
        return;
      }
      requestAnimationFrame(pollEnd);
    };

    loadAPI();

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <section className="section section--gray">
      <AnimatedSection>
        <div className="video-intro">
          <p>
            Watch a walkthrough of how we built the plugin and see it in action
            encoding a real government program.
          </p>
        </div>
      </AnimatedSection>
      <div className="container--wide">
        <AnimatedSection>
          <div className="video-wrapper">
            <div ref={containerRef} />
          </div>
        </AnimatedSection>
        <p className="video-note">
          Clip starts at 9:35 and ends at 18:45.{' '}
          <a
            href="https://www.youtube.com/watch?v=Ke_J3pOdL8k"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch the full video on YouTube &rarr;
          </a>
        </p>
      </div>
    </section>
  );
};
