import { useRef, useEffect } from 'react'

export default function Card({text, onClick, isClicked}) {
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
                cardRef.current.style.backgroundColor = isClicked ? 'blue' : 'transparent';
                cardRef.current.style.color = 'white';
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
    }, [isClicked]);


    return <button onClick={onClick}ref={cardRef} style={{
        border: '1px solid white', 
        width: '150px',
        height: '250px',
        padding: '10px',
        borderRadius: '10px',
        background: 'transparent',
        color: 'white',
        fontSize: '2rem'
    }}>{text + '\n' +isClicked.toString()}</button>
}