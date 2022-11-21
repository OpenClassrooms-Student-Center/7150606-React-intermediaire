function Card({ label, title, picture }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <span>{label}</span>
            <img src={picture} alt="freelance" height={100} width={100} />
            <span>{title}</span>
        </div>
    )
}

export default Card