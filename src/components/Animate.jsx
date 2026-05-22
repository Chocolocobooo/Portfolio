import { useInView } from '../hooks'

function Animate({ children, delay = 0, style = {} }) {
  const [ref, visible] = useInView(0.1)

  return (
    <div
      ref={ref}
      className={`animate${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  )
}

export default Animate