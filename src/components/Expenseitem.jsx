import './ExpenseItem.css'

const ExpenseItem = (props) => {
    let title = props.expenses.title

const changeTitleHandler = () => {
    title = 'updated'
}


    return (
        <div>
            <h2 className="expense-item_description">{title}</h2>
            <button onClick={changeTitleHandler}>Update</button>
            <div className="expense-item_price">{props.expenses.amount}</div>
            <ExpenseDate expenseDate={props.expenses.date}/>
        </div>
    )
}

export default ExpenseItem