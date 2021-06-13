import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [newTitle, setnewTitle] = useState("");
  const [newAmount, setnewAmount] = useState("");
  const [newDate, setnewDate] = useState("");

  const titleChange = (event) => {
    setnewTitle(event.target.value);
  };
  const amountChange = (event) => {
    setnewAmount(event.target.value);
  };
  const dateChange = (event) => {
    setnewDate(event.target.value);
  };

// alternative method for use state   

// const [userInput , setuserInput] = useState(
//     newtitle = '',
//     newAmount = '',
//     newDate = ''
// )
//   const titleChange = (event) => {
//     setuserInput((prevState)=>{
//       return{...prevState, newtitle = event.target.value} ; 
//     });
//   };
//   const amountChange = (event) => {
//     setuserInput((prevState)=>{
//       return{...prevState, newAmount = event.target.value} ; 
//     });
//   };
//   const dateChange = (event) => {
//     setuserInput((prevState)=>{
//       return{...prevState, newDate = event.target.value} ; 
//     });
//   };

const submited = (event) =>{
    event.preventDefault();
    const expenseData ={
     title: newTitle,
     amount: +newAmount,
     date: new Date(newDate),
    }
    console.log(expenseData);
    // for 2 way binding 
    
    // sending data to parent 

    props.onSaveData(expenseData);
    setnewTitle('');
    setnewAmount('');
    setnewDate('');

    
}
//  const cancelForm = (props)  =>{
//    console.log("cancel form");
//    props.cancelForms = false ;
//    console.log();
// }

  return (
    <form onSubmit={submited}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={newTitle} onChange={titleChange}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={newAmount} onChange={amountChange} min="0.01" step="0.01"></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="Date" value={newDate} onChange={dateChange} min="2020-02-02" max="2022-02-02"></input>
        </div>
      </div>
      <div class="new-expense__actions">
         <button type="button" onClick={props.cancelForms}> Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
