import { motion } from "framer-motion"

const motionvariants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
}

const MotionMain = (props) => {
    return (
        <motion.main
              variants={motionvariants} // Pass the variant object into Framer Motion 
              initial="hidden" // Set the initial state to variants.hidden
              animate="enter" // Animated state to variants.enter
              exit="exit" // Exit state (used later) to variants.exit
              transition={{ type: 'linear', duration: 0.2 }} // Set the transition to linear
              {...props}
          >
          {props.children}
        </motion.main>
    )
}

export default MotionMain
