import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props){

    const saveExpenseData = (newData) =>{
        const newExpense = {
            ...newData , id:Math.random().toString()
        };
        // console.log(newExpense);
         props.onAddData(newExpense);
         setShowResults(false);
    };

    const [showResults, setShowResults] = React.useState(false);
     
    const addNewExpense = () =>{
        setShowResults(true);
     }
    const canceled = () =>{
        setShowResults(false);
    } 
 

  

 return(
     <div className="new-expense">
         { !showResults &&  <button onClick={addNewExpense}>Add New Expense</button>}
         { showResults &&  <ExpenseForm onSaveData={saveExpenseData} cancelForms = {canceled}></ExpenseForm>}
        
     </div>
 );
}

export default NewExpense;