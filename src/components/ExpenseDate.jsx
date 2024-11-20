import '/ExpenseDate.css'

const ExpenseDate = (props) => {
    const date = props.expenseDate
    const year = date.getFulYear()
    const month = date.toLocalString('en-Us', {month: 'short'})
    const day = date.toLocalString('en-Us', {day: '2-digit'})

    return(
    <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div>
    </div>
    )
}