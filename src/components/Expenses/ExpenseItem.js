import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card"


function ExpenseItem(props) {
  const title = props.title;
  const changeTitle = () =>{
    console.log(title);
  }

  return (
    <Card className="expense-item">
     <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={changeTitle}>Change title</button> */}
    </Card>
  );
}

export default ExpenseItem;
