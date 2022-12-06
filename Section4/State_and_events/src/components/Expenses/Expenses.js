import "./Expenses.css";
import React, { useState } from "react"; // JSX에서는 굳이 안써도 되지만, 내부에서 돌아가는걸 명시하기위해 썻다
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const selectedYearHandler = (selectedYearValue) => {
    setSelectedYear(selectedYearValue);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return selectedYear === expense.date.getFullYear().toString()
      ? true
      : false;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onSelectedYearHandler={selectedYearHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
