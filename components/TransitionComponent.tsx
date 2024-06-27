
"use client";
import { fadeIn } from '@/utils/MotionTransition';
import { motion } from 'framer-motion'
interface TransitionComponent{
    children: React.ReactNode,
    position: 'right' | 'bottom',
    className?: string
}
const TransitionComponent = (props: TransitionComponent) => {
    const {children,position,className} = props;
  return (
    <motion.div 
    variants={fadeIn(position)}
    initial="hidden"
    animate="visible"
    exit="hidden"
    className={className}
    >
    {children}
    </motion.div>
  )
}

export default TransitionComponent
