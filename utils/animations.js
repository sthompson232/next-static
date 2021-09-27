const easing = [0.6, -0.05, 0.01, 0.99];

export const pageFadeIn = {
    exit: { opacity: 0 },
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 }},
}

export const fadeInX = {
  initial: { x: 60, opacity: 0, transition: { duration: 0.6, ease: easing }},
  animate: { x: 0, opacity: 1, transition: { duration: 0.6, ease: easing }},
}

export const fadeInY = {
  initial: { y: 60, opacity: 0, transition: { duration: 0.6, ease: easing }},
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: easing }},
}

export const fadeInShakeY = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { delay: 0.2, ease: easing },
}

export const fadeInShakeX = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { delay: 0.2, ease: easing },
}

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};