import React, { useState } from "react";

import SumPage from "./Pages/SumPage";
import StudentPage from "./Pages/StudentPage";

import { Routes, Route } from "react-router-dom";

const App = () => {
  // state React Hook
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [sum, setSum] = useState(0);

  const valueOnChangeForFirstNumber = (e) => {
    setFirstNumber(e.target.value);
  };
  const valueOnChangeForSecondNumber = (e) => {
    setSecondNumber(e.target.value);
  };
  const sumOfTwoNumber = () => {
    setSum(Number(firstNumber) + Number(secondNumber));

   
  };
  const students = [
    "Sudeep",
    "Sagar",
    "Suresh",
    "Shrestha",
    "Bhattarai",
    "Chhantyal",
  ];
  return (
    <>
      <Routes>
        <Route path="/student" element={<StudentPage stud={students} />} />
        <Route
          path="/sum"
          element={
            <SumPage
              sumOfTwoNumber={sumOfTwoNumber}
              valueOnChangeForFirstNumber={valueOnChangeForFirstNumber}
              valueOnChangeForSecondNumber={valueOnChangeForSecondNumber}
              sum={sum}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
