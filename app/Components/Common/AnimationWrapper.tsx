// components/AppWrapper.tsx
'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LogoPreloader from './LogoAnimation';
import { usePathname } from 'next/navigation';

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    // Reset preloader on route change
    setIsLoaded(false);

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000); // Match the duration of the animation

    return () => clearTimeout(timer);
  }, [pathname]); // Re-run on pathname change

  return (
    <>
      <AnimatePresence mode='wait'>
        {!isLoaded && <LogoPreloader onFinish={() => setIsLoaded(true)} />}
      </AnimatePresence>

      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
