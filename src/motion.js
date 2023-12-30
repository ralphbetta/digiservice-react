

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
        // type: 'tween',
        // staggerChildren: 0.05,
    }
})


export const fadeIn = (direction, index)=>({

        initial: {
           y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
           x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
           opacity: 0,
          transition: {
            duration: 1, 
            ease: [0.25, 0.25, 0.25, 0.75]
          }
        },
        animate: {
          y: 0,
          x: 0,
          opacity: 1,
          transition: {
            duration: 2.8,
            delay: index * 0.05,
            ease: [0.5, 0.71, 1, 1.5],
          }
        }
      });


      export const zoomIn = (index)=>({

        initial: {
          scale: 0,
           opacity: 0,
          transition: {
            duration: 1, 
            ease: [0.25, 0.25, 0.25, 0.75]
          }
        },
        animate: {
          scale:1,
          opacity: 1,
          transition: {
            duration: 2.8,
            delay: index * 0.05,
            ease: [0.5, 0.71, 1, 1.5],
          }
        }
      });


    export  const fadeStagger = {
        initial: {
          x: -50,
        },
        animate: {
          x: 0,
          transition: {
            duration: 1,
            delay: 0.5,
            delayChildren: 2.4,
            staggerChildren: 0.04,
            staggerDirection: -1
          }
        }
      }
    
    

    