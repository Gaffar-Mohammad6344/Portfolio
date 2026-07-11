export default function TechMarquee() {
  const items = ['React', 'Vite', 'JavaScript', 'CSS', 'Node.js', 'MongoDB', 'Figma']

  return (
    <section style={styles.wrap}>
      <div style={styles.track}>
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} style={styles.item}>{item}</span>
        ))}
      </div>
    </section>
  )
}

const styles = {
  wrap: { overflow: 'hidden', padding: '0.3rem 0 1rem' },
  track: { display: 'flex', gap: '0.6rem', width: 'max-content', animation: 'marquee 18s linear infinite' },
  item: { border: '1px solid rgba(148, 163, 184, 0.18)', borderRadius: '999px', padding: '0.45rem 0.6rem', background: 'rgba(15, 23, 42, 0.78)', color: '#e2e8f0' }
}
