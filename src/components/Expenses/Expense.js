import React,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpenseList';
import ExpenseChart from './ExpenseChart'

function Expense(props) {
  const [enteredyear , setenteredYear] = useState("2020");
  const getYear = (year) =>{
  console.log(year + "in expense");
  setenteredYear(year);
  }
  const filteredExpense = props.items.filter((expense) =>{
  return expense.date.getFullYear().toString() ===  enteredyear;
  })

  // let allExpenses = <p >There is no list here</p> ;

  // if(filteredExpense.length > 0){
  //   allExpenses = filteredExpense.map((expense) =>  <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)
  // }
  
 return(

      <Card className="expenses">
      <ExpensesFilter selected={enteredyear} onGetYear={getYear}/>
      <ExpenseChart expense={filteredExpense}/>
      <ExpensesList items={filteredExpense}/>
      {/* {allExpenses} */}
    {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
     <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
     <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
     <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/> */}
   </Card>

 );
}


export default Expense ;