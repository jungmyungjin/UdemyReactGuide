import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); // 단순히 값을 저장하기 위한 State
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value); // 단순히 값을 저장하기 위한 State
  };
  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value); // 단순히 값을 저장하기 위한 State
  };

  // const titleChangeHandler = (event) => {
  //   setUserInput({
  //     // 객체 안의 값을 유지한 채, 변경된 title 값만 업데이트 한다.
  //     ...userInput, // 기존 객체의 키와 값
  //     enteredTitle: event.target.value, // 사용자 입력값을 오버라이딩
  //   });
  // };

  const submitHandler = (event) => {
    event.preventDefault(); //  built-in 자바스크립트, 반응하지 않은 기본 동작. 기본적으로 요청되는것을 막는다.

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate), // 날짜(string) -> 날짜(Date 객체 타입)
    };
    // props.onSaveExpenseData(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense__control">
          <label for="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onInput={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label for="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onInput={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label for="">Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            value={enteredDate}
            onInput={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
