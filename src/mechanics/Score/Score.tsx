import './Score.css'

interface ScoreProps {
  wins: number;
  loses: number
}

const Score = ({wins, loses}: ScoreProps) => {
  return (
    <div className="score_count">
        <h3 className='wins'>Wins:<span>{wins}</span></h3>
        <h3 className='loses'>Loses:<span>{loses}</span></h3>
    </div>
  )
}

export default Score