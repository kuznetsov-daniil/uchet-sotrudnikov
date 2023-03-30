import EmployeeListItem from './employee-list-item';
import './employee-list.css';

const EmployeeList = ({data, onDelete, onToggleIncreace, onTogglePremium}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return <EmployeeListItem
                key={id}
                {...itemProps}
                onToggleIncreace={() => onToggleIncreace(id)}
                onTogglePremium={() => onTogglePremium(id)}
                onDelete={() => onDelete(id)}
            />
    })

    return (
        <section class="employee-list">        
            {elements}
        </section>
    )
}

export default EmployeeList;