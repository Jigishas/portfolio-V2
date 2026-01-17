import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Card } from './ui/card';

const variants = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.22, 0.9, 0.36, 1] },
  }),
  hover: { scale: 1.03, transition: { duration: 0.18 } },
};

const MotionCard = ({ children, index = 0, className = '', ...rest }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  const handlePointer = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const posX = e.clientX - rect.left - rect.width / 2;
    const posY = e.clientY - rect.top - rect.height / 2;
    x.set(posX / 8);
    y.set(posY / 8);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      className={`group ${className}`}
      onPointerMove={handlePointer}
      onPointerLeave={handleLeave}
      style={{ x, y, rotateX, rotateY }}
    >
      <Card className="glass transition-transform animate-border-glow" {...rest}>
        {children}
      </Card>
    </motion.div>
  );
};

export default MotionCard;