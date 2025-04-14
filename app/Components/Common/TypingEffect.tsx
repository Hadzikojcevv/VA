'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TypingEffectProps {
    words: string[]
    className?: string
}

const TypingEffect = ({words, className}: TypingEffectProps) => {
  const [index, setIndex] = useState(0); // Which word
  const [subIndex, setSubIndex] = useState(0); // How many characters shown
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index === words.length) setIndex(0);

    const timeout = setTimeout(() => {
      setSubIndex((prev) =>
        deleting ? prev - 1 : prev + 1
      );

      if (!deleting && subIndex === words[index].length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className={`text-5xl md:text-6xl 2xl:text-8xl tracking-tighter font-bold text-center ${className && className}`}>
      <motion.span
        key={index}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {words[index].substring(0, subIndex)}
      </motion.span>
      <span className="inline-block w-1">{blink ? '|' : ' '}</span>
    </div>
  );
};

export default TypingEffect;
