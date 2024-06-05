import Card from "./Card"
import { useState } from "react";

export default function CardGrid() {

    const [cards, setCards] = useState(['a', 'b', 'c', 'd', 'e'])
    const replicaSet = ['a', 'b', 'c', 'd', 'e']

    const shuffle = () => {
        let currentIndex = replicaSet.length;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [replicaSet[currentIndex], replicaSet[randomIndex]] = [
            replicaSet[randomIndex], replicaSet[currentIndex]];
        }

        console.log(replicaSet)
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
        cards.map((text) => {
            return <Card onClick={shuffle} key={text} text={text}></Card>
        })
    }
    </div>
}