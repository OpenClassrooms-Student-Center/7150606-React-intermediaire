interface CardProps {
  label: string
  title: string
  picture: string
}

function Card({ label, title, picture }: CardProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
      <span>{label}</span>
      <img src={picture} alt="freelance" height={80} width={80} />
      <span>{title}</span>
    </div>
  )
}

export default Card
