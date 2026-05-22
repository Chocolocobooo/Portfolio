import Animate from './Animate'

function SectionHeader({ overline, title }) {
  return (
    <Animate>
      <span className="overline">{overline}</span>
      <h2 className="section-title">{title}</h2>
      <div className="divider" />
    </Animate>
  )
}
export default SectionHeader