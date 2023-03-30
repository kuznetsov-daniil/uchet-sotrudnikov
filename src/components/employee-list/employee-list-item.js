

const EmployeeListItem = (props) => {
    const {name, salary, onDelete, onTogglePremium, onToggleIncreace, premium, increase} = props;

    let classNames = 'employee-item'

    if (premium) {
        classNames += ' premium'
    }

    if (increase) {
        classNames += ' encrease'
    }

    return (


        <li class={classNames}>
            <p class="item-name" onClick={onToggleIncreace}>{name}</p>
            <input class="item-salary" defaultValue={salary + '$'} />
            <div class="item-actions">
                <div class="actions-premium" onClick={onTogglePremium}>
                    <i class="fa-solid fa-cookie"></i>
                </div>
                <div class="actions-delete"
                    onClick={onDelete}>
                    <i class="fa-solid fa-trash"></i>
                </div>
                <div class="actions-like">
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
        </li>
    )
}

export default EmployeeListItem;