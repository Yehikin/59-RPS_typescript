import './WinScreen.css'

interface WinScreenProps {
  user: string;
  comp: string;
  close: () => void;
}

const WinScreen = ({close, comp, user}: WinScreenProps) => {
  return (
    <div className="resultDisplay">
      <div className="WSwrap">
        <div className="optionsWrap">

          <div id="playerDisplay">
            <div className='WSoption__container'>
              <img className='pick__img' src={`/img/${user}.png`} alt="" />
            </div>
          </div>

          <div id="computerDisplay">
            <div className='WSoption__container'>
              <img className='pick__img' src={`/img/${comp}.png`} alt="" />
            </div>
          </div>

        </div>

        <button id="replay" onClick={close}>Play again?</button>
      </div>
    </div>
  )
}

export default WinScreen