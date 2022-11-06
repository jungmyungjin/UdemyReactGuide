import React from "react"; // 최신 셋업에서는 생략 가능하다. 하지만 JSX도 결국 내부에서는 react 라이브러리를 사용한다.
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "Phone",
      amount: 703.24,
      date: new Date(2023, 5, 3),
    },
    {
      id: "e6",
      title: "padding",
      amount: 280.24,
      date: new Date(2023, 11, 25),
    },
  ];

  // JSX를 사용하지 않을 때의 React 코드
  return React.createElement(
    "div",
    React.createElement("h2", {}, "Let's get started!"),
    React.createElement(Expenses, { items: expenses })
  );

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
