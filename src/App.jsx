import { useState } from "react";
import Input from "./components/Input";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1500,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <>
      <Input
        initial={userInput.initialInvestment}
        annual={userInput.annualInvestment}
        expected={userInput.expectedReturn}
        duration={userInput.duration}
        change={handleChange}
      />
      {!isInputValid ? (
        <h2 className="center">Please Enter a Duration Greater than 0 Years</h2>
      ) : null}
      {isInputValid ? <Results input={userInput} /> : null}
    </>
  );
}

export default App;
