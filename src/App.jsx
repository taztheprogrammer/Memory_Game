import CardGrid from "./Components/CardGrid"
import Score from "./Score"
import Difficulty from "./Components/Difficulty"
import { useState } from 'react'

export default function App() {

  const [score, setScore] = useState(0)
  const [diffSelection, setDiffSelection] = useState(4)
  const difficultySelected = false;
  

  return <CardGrid size={diffSelection} setScore={setScore}></CardGrid>

  // if (difficultySelected === false) {
  //   return <Difficulty></Difficulty>
  // } else {
  //   return <CardGrid size={selection} setScore={setScore}></CardGrid>
  // }
    
  {/* <Score scoreDisplay={score}></Score> 
  <CardGrid setScore={setScore}></CardGrid> */}
}