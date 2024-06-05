import { useRef, useEffect } from 'react'

export default function Card({text, onClick}) {
    const cardRef = useRef(null);
    
    useEffect(() => {
        const handleMouseEnter = () => {
            if (cardRef.current) {
                cardRef.current.style.backgroundColor = 'lightgray';
                cardRef.current.style.color = 'black';
            }
        };

        const handleMouseLeave = () => {
            if (cardRef.current) {
                cardRef.current.style.backgroundColor = 'transparent';
            }
        };

        if (cardRef.current) {
            cardRef.current.addEventListener('mouseenter', handleMouseEnter);
            cardRef.current.addEventListener('mouseleave', handleMouseLeave);
        }

        // Cleanup event listeners on component unmount
        return () => {
            if (cardRef.current) {
                cardRef.current.removeEventListener('mouseenter', handleMouseEnter);
                cardRef.current.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);


    return <button onClick={onClick}ref={cardRef} style={{
        border: '1px solid white', 
        width: '150px',
        height: '250px',
        padding: '10px',
        borderRadius: '10px',
        background: 'transparent',
        color: 'white',
        fontSize: '2rem'
    }}>{text}</button>
}