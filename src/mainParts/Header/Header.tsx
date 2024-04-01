import './Header.css'
import Score from "../../mechanics/Score/Score";


interface HeaderProps {
  wins: number;
  loses: number
}

const Header = ({wins, loses}: HeaderProps) => {
  return (
    <header className='header'>
        <nav className='header__container'>
          <h3>Rock Paper Scissors</h3>
          <Score wins={wins} loses={loses}/>
        </nav>
    </header>
  )
}

export default Header