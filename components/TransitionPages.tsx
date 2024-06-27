"use client";
import {transitionVariantsPage} from  '@/utils/MotionTransition';
import {motion,AnimatePresence} from 'framer-motion'
const TransitionPages = () => {
  return (
    <AnimatePresence mode='wait'>
      <div>
        <motion.div
        className='fixed top-0 bottom-0 right-full w-screen bg-[#2e2257]'
        variants={transitionVariantsPage}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{delay:0.5,duration:1,ease:'easeInOut'}}
        >
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default TransitionPages;
