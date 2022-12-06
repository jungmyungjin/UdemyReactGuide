import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData);
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), // id 값 대충 입력
    };
    props.onAddExpenses(expenseData);
  };

  let [isShowForm, setShowForm] = useState(false);
  const setShowFormHandler = () => {
    console.log(isShowForm);
    setShowForm(!isShowForm);
  };

  return (
    <div className="new-expense">
      {isShowForm === false && (
        <button onClick={setShowFormHandler}> Add New Expense</button>
      )}
      {isShowForm === true && (
        <ExpenseForm
          setShowForm={setShowFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
