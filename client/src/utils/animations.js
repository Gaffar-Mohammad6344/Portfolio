export function fadeInUp(delay = 0) {
  return {
    animation: 'fadeUp 0.6s ease forwards',
    animationDelay: `${delay}ms`,
    opacity: 0,
    transform: 'translateY(18px)'
  }
}
