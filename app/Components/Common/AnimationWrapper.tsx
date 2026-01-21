// components/AppWrapper.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LogoPreloader from './LogoAnimation';
import { usePathname } from 'next/navigation';

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [renderedChildren, setRenderedChildren] = useState<React.ReactNode>(children);
  const pathname = usePathname(); // Get current route
  const nextChildrenRef = useRef<React.ReactNode>(children);

  // Always keep track of the latest children for the next swap.
  nextChildrenRef.current = children;

  useEffect(() => {
    // Start transition on route change, but keep current page mounted
    // until the preloader animation finishes.
    setIsLoaded(false);
  }, [pathname]); // Re-run on pathname change

  return (
    <>
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

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {renderedChildren}
      </motion.div>
    </>
  );
}
