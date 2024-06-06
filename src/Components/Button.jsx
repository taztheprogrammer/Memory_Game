export default function Button({text, color, onClick}) {
    return <button onClick={onClick} style={{
        width: '100px',
        height: '50px',
        backgroundColor: color,
        color: 'white',
        borderStyle: 'none',
        fontSize: '1.5rem',
        cursor: 'pointer'
    }}>{text}</button>
}