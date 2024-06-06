import CardGrid from "./Components/CardGrid"
import Score from "./Score"
import Difficulty from "./Components/Difficulty"
import { useState } from 'react'

export default function App() {

  const [score, setScore] = useState(0)
  const [diffSelection, setDiffSelection] = useState(4)
  const [diffScreen, setDiffScreen] = useState(true);
  

  // return <div>
  //   <Score scoreDisplay={score}></Score>
  //   <CardGrid size={diffSelection} setScore={setScore}></CardGrid>
  //   </div>

  function Back() {
    setDiffScreen(true);
    setScore(0)
  }

  if (diffScreen === true) {
    return <Difficulty setDiffSelection={setDiffSelection} setDiffScreen={setDiffScreen}></Difficulty>
  } else {
    return <>
    <Score scoreDisplay={score}></Score> 
    <button onClick={() => Back()}>Back</button>
    <CardGrid size={diffSelection} setScore={setScore}></CardGrid>
    </>
  }
    
  {/* <Score scoreDisplay={score}></Score> 
  <CardGrid setScore={setScore}></CardGrid> */}
}