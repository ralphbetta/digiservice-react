

export const fadeIn = (direction, delay)=>{

    return {
        initial: {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        },

        animate: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    }
}

export const slideIn =(direction, index)=> ({
    initial: { 
        y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
        x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
    },
    default: { y: 0, x: 0 },
    transition: {
        duration: 1,
        delay: (index == null ? 1 : index * 0.05),
        ease: [0.5, 0.71, 1, 1.5],
        // staggerChildren: 0.05,
    }
})

    

    

// class MotionVariant {
      
    //   static stagger = {
    //     animate: {
    //       transition: {
    //         delayChildren: 0.4,
    //         staggerChildren: 0.2,
    //         staggerDirection: 1
    //       }
    //     }
    //   }
    
    //   static fadeInUp = {
    //     initial: {
    //       y: -60,
    //       opacity: 0,
    //       transition: {
    //         duration: 0.6, ease: this.easeing
    //       }
    //     },
    //     animate: {
    //       y: 0,
    //       opacity: 1,
    //       transition: {
    //         duration: 0.6,
    //         delay: 0.5,
    //         ease: this.easeing
    //       }
    //     }
    //   };
    
    //   static transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
    
      // static firstName = {
      //   initial: {
      //     y: -20,
      //   },
      //   animate: {
      //     y: 0,
      //     transition: {
      //       delayChildren: 0.4,
      //       staggerChildren: 0.04,
      //       staggerDirection: -1
      //     }
      //   }
      // }
    
      // static lastName = {
      //   initial: {
      //     y: -20,
      //   },
      //   animate: {
      //     y: 0,
      //     transition: {
      //       delayChildren: 0.4,
      //       staggerChildren: 0.04,
      //       staggerDirection: 1
      //     }
      //   }
      // }
    
      // static letter = {
      //   initial: {
      //     y: 400,
      //   },
      //   animate: {
      //     y: 0,
      //     transition: { duration: 1, ...transition }
      //   }
      // };
    
      // static btnGroup = {
      //   initial: {
      //     y: -60,
      //     opacity: 0,
      //     transition: { duration: 0.6, ease: easeing }
      //   },
      //   animate: {
      //     y: 0,
      //     opacity: 1,
      //     animation: {
      //       duration: 0.6,
      //       ease: easeing
      //     }
      //   }
      // };
      // static star = {
      //   initial: {
      //     y: 60,
      //     opacity: 0,
      //     transition: { duration: 0.8, ease: easeing }
      //   },
      //   animate: {
      //     y: 0,
      //     opacity: 1,
      //     animation: {
      //       duration: 0.6,
      //       ease: easeing
      //     }
      //   }
      // };
    
      // static header = {
      //   initial: {
      //     y: -60,
      //     opacity: 0,
      //     transition: { duration: 0.1, ease: easeing }
      //   },
      //   animate: {
      //     y: 0,
      //     opacity: 1,
      //     animation: {
      //       duration: 0.6,
      //       ease: easeing
      //     }
      //   }
      // };
    
// }

