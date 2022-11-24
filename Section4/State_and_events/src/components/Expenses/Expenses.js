import "./Expenses.css";
import React, { useState } from "react"; // JSX에서는 굳이 안써도 되지만, 내부에서 돌아가는걸 명시하기위해 썻다
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const selectedYearHandler = (selectedYearValue) => {
    setSelectedYear(selectedYearValue);
  };
  console.log("selected " + selectedYear);
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onSelectedYearHandler={selectedYearHandler}
      />
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[4].title}
        amount={props.items[4].amount}
        date={props.items[4].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[5].title}
        amount={props.items[5].amount}
        date={props.items[5].date}
      ></ExpenseItem>
    </Card>
  );
};

export default Expenses;
