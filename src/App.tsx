import { useState } from "react";
import "./App.css";
import Header from "./mainParts/Header/Header";
import MainCon from "./mainParts/MainContent/MainCon";
import Winscreen from './mainParts/WinScreen/WinScreen'

const checkResult = (playerChoise: string, computerChoice: string) => {
  if (playerChoise === computerChoice) {
    // result = "It's a tie!";
    return 0;
  } else {
    switch (playerChoise) {
      case "rock":
        return computerChoice === "scissors" ? 1 : -1;
      case "paper":
        return computerChoice === "rock" ? 1 : -1;
      case "scissors":
        return computerChoice === "paper" ? 1 : -1;
    }
  }
};
const choices = ["rock", "paper", "scissors"];

function App() {
  const [userChoice, setUserChoice] = useState("");
  const [compChoice, setCompChoice] = useState("");

  const [wins, setWins] = useState(0);
  const [loses, setLoses] = useState(0);

  const [running, setRunning] = useState(false);

  const playGame = (playerChoice: string) => {
    setRunning(true)
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    setUserChoice(playerChoice)
    setCompChoice(computerChoice)
    const result = checkResult(playerChoice, computerChoice);

    if (result === 1) {
      setWins((v) => v + 1);
    } else if (result === -1) {
      setLoses((v) => v + 1);
    } else {
      <>
        <h1>It's a tie!</h1>
      </>
    }
  };

  return (
    <>
      <Header wins={wins} loses={loses} />
      {running ? (
      <Winscreen comp={compChoice} user={userChoice} close={() => setRunning(false)}/>
      ) : (
        <div className="container">
          <MainCon playGame={playGame} />
        </div>
      )}
    </>
  );
}

export default App;
