export const slideUp = {
    initial: {
        // y: 150,
        opacity: 0,  // Empezamos con opacidad en 0
    },
    enter: {
        // y: 0,
        opacity: 1,  // La opacidad sube a 1
        transition: {
            duration: 1.3,
            ease: [0.33, 1, 0.68, 1],
            delay: 0.2
        }
    }
}

export const slideUp2 = {
  initial: {
      y: 150,
      opacity: 0,  // Empezamos con opacidad en 0
  },
  enter: {
      y: 0,
      opacity: 1,  // La opacidad sube a 1
      transition: {
          duration: 1.3,
          ease: [0.33, 1, 0.68, 1],
          delay: 0.2
      }
  }
}

export const convertO = {
    initial: {
      opacity: 1,  // Empieza con opacidad 1
      width: '100%', // Empieza con ancho inicial
      height: '100%', // Empieza con altura inicial
    },
    enter: {
      opacity: 0,  // La opacidad se reduce a 0
      width: '90%',  // Se reduce el ancho
      height: '75%', // Se reduce la altura
      transition: {
        duration: 2.0,
        ease: [0.23, 1, 0.58, 1],
        delay: 4.4,
      }
    }
  }
  