import {Component} from 'react';
import './add-employee.css';

class AddEmployee extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary)
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state;

        return (
            <section class="add-employee">
                <h2 class="add-title">Добавьте нового сотрудника</h2>
                <form class="add-wrapper" onSubmit={this.onSubmit}>
                    <input name='name' type="text" class="input add-input" placeholder="Как его зовут?" onChange={this.onValueChange}
                    value={name}/>
                    <input name="salary" type="text" class="input add-input" placeholder="З/П в $" onChange={this.onValueChange}
                    value={salary}/>
                    <button class="button add-button" type='submit'>Добавить</button>
                </form>
            </section>
        )
    }
}

export default AddEmployee;