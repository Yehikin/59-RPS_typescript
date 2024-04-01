import Options from "../../mechanics/Options/Options"
import './MainCon.css'

interface MainConProps {playGame: (type: string) => void}

const MainCon = ({playGame}: MainConProps) => {
  return (
    <main className='main'>
        <h3>Pick one</h3>
        <Options playGame={playGame}/>
    </main>
  )
}

export default MainCon