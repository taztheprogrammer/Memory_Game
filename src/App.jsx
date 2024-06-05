import CardGrid from "./CardGrid"
import Score from "./Score"
import { useState } from 'react'

export default function App() {

  const [score, setScore] = useState(0)

  

  return <>
  <Score scoreDisplay={score}></Score>
  <CardGrid setScore={setScore}></CardGrid>
</>
}