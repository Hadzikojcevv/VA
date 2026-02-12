// components/AppWrapper.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LogoPreloader from './LogoAnimation';
import { usePathname } from 'next/navigation';
import { locales } from '@/i18n/routing';

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [renderedChildren, setRenderedChildren] = useState<React.ReactNode>(children);
  const [shouldShowAnimation, setShouldShowAnimation] = useState(true);
  const [skipFadeIn, setSkipFadeIn] = useState(false);
  const pathname = usePathname(); // Get current route
  const nextChildrenRef = useRef<React.ReactNode>(children);
  const previousRouteRef = useRef<string | null>(null);
  const isInitialMountRef = useRef(true);

  // Always keep track of the latest children for the next swap.
  nextChildrenRef.current = children;

  // Extract route without locale prefix
  const getRouteWithoutLocale = (path: string): string => {
    const pathSegments = path.split('/').filter(Boolean);
    // Check if first segment is a locale
    if (pathSegments.length > 0 && locales.includes(pathSegments[0] as typeof locales[number])) {
      return '/' + pathSegments.slice(1).join('/');
    }
    return path;
  };

  useEffect(() => {
    const currentRoute = getRouteWithoutLocale(pathname);
    const previousRoute = previousRouteRef.current;

    // Check if this is the initial mount
    const isInitialMount = isInitialMountRef.current;

    if (isInitialMount) {
      // First mount - show animation once
      setShouldShowAnimation(true);
      setSkipFadeIn(false);
      setIsLoaded(false);
      isInitialMountRef.current = false;
    } else if (previousRoute !== null) {
      // Check if the route actually changed (not just locale)
      const routeChanged = previousRoute !== currentRoute;

      if (routeChanged) {
        // Route changed (not just locale), show animation
        setShouldShowAnimation(true);
        setSkipFadeIn(false);
        setIsLoaded(false);
      } else {
        // Only locale changed, skip animation completely
        setShouldShowAnimation(false);
        setSkipFadeIn(true);
        // Update children immediately without animation
        setRenderedChildren(nextChildrenRef.current);
        setIsLoaded(true);
      }
    }

    // Update previous route
    previousRouteRef.current = currentRoute;
  }, [pathname]);

  return (
    <>
      {shouldShowAnimation && (
        <AnimatePresence mode='wait'>
          {!isLoaded && (
            <LogoPreloader
              onFinish={() => {
                setRenderedChildren(nextChildrenRef.current);
                setIsLoaded(true);
              }}
            />
          )}
        </AnimatePresence>
      )}

      {skipFadeIn ? (
        <div>
          {renderedChildren}
        </div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {renderedChildren}
        </motion.div>
      )}
    </>
  );
}
