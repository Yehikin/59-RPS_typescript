import './Options.css'

interface OptionsProps {playGame: (type: string) => void}

const Options = ({playGame}: OptionsProps ) => {

  // function playGame(playerChoise: string){
  //   // const computerChoice = choices[Math.floor(Math.random() * 3)];
  //   // let result = "";

    
  // };
  
  return (
    <div className="options">

        <div className="option__container rock" tabIndex={0} onClick={() => playGame('rock')}>
            <img className='pick__img' src="/img/rock.png" alt="✊" />
            <p>Rock</p>
        </div>

        <div className="option__container paper" tabIndex={0} onClick={() => playGame('paper')}>
          <img className='pick__img' src="/img/paper.png" alt="✋" />
          <p>Paper</p>
        </div>

        <div className="option__container scissors" tabIndex={0} onClick={() => playGame('scissors')}>
          <img className='pick__img' src="/img/scissors.png" alt="✌️" />
          <p>Scissors</p>
        </div>

    </div>
  )
}

export default Options