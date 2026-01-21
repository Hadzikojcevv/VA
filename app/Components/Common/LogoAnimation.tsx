// components/LogoPreloader.tsx
'use client';

import { motion } from 'framer-motion';

export default function LogoPreloader({ onFinish }: { onFinish: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <video
        src="/common/AnimeWhiteCompress.mov"
        className="h-auto w-[min(520px,85vw)] max-h-[85vh] object-contain"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={onFinish}
      />
    </motion.div>
  );
}
