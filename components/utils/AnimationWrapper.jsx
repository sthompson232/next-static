import React from 'react'
import { motion } from 'framer-motion'
import { fadeInX, pageFadeIn } from '../../utils/animations'


const AnimationWrapper = ({ children }) => {
    return (
    <motion.div 
      initial='initial'
      animate='animate'
      exit='exit'
    >
        <motion.div variants={pageFadeIn}>
            {children}
        </motion.div>
    </motion.div>
    )
}

export default AnimationWrapper
