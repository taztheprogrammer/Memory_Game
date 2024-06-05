import Card from "./Card"
import { useState } from "react";

export default function CardGrid({setScore}) {

    const [cards, setCards] = useState([
        {text: 'a', clicked: false},
        {text: 'b', clicked: false},
        {text: 'c', clicked: false},
        {text: 'd', clicked: false},
        {text: 'e', clicked: false}
    ])

    const shuffle = (key) => {

        const replicaSet = [...cards]


        const index = replicaSet.findIndex(card => card.text === key)

        if (replicaSet[index].clicked === true) {
            setScore(score => 0)
            replicaSet.forEach((item) => item.clicked = false)
        } else {
            setScore(score => score + 1)
            replicaSet[index] = {...replicaSet[index], clicked: true}
        }


        let currentIndex = replicaSet.length;
      
        while (currentIndex != 0) {
        
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [replicaSet[currentIndex], replicaSet[randomIndex]] = [
            replicaSet[randomIndex], replicaSet[currentIndex]];
        }

        setCards(replicaSet)
      }
    return <div style={{
        // border: '1px solid red',
        marginTop: '20%',
        padding: '5px',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        rowGap: '20px',
        maxWidth: '750px',
        margin: '10% auto'
    }}> {
        cards.map((item) => {
            return <Card onClick={() => shuffle(item.text)} key={item.text} text={item.text} isClicked={item.clicked}></Card>
        })
    }
    </div>
}