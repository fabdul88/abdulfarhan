import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';

const ResizablePanel = ({ children }) => {
  let [ref, { height }] = useMeasure();

  return (
    <motion.div
      className="about-container__profile-text-animation-container"
      animate={{ height: height || 'auto' }}
    >
      <AnimatePresence initial={false}>{children}</AnimatePresence>
    </motion.div>
  );
};

export default ResizablePanel;
