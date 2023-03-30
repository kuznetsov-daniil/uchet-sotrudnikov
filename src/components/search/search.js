import { Component } from 'react';
import './search.css';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.onUpdateSearch(term);
    }
    
    render() {
        const {onFilter} = this.props;


        const buttonsData = [
            {name: 'all', label: 'Все сотрудники'},
            {name: 'rise', label: 'На повышение'},
            {name: 'moreThen1000', label: 'З/П больше 1000$'},
        ]

        const buttons = buttonsData.map(({name, label}) => {
            const active = this.props.filter === name;
            const clazz = active ? 'search-button-active' : 'btn';
            return (
                <button 
                    className={`button ${clazz}`}
                    onClick={() => onFilter(name)}
                    key={name}>
                    {label}
                </button>
            )
        })


        return (
            <section class="search">
                <input type="text" class="search-input input" placeholder="Найти сотрудника"
                    value={this.state.term}
                    onChange={this.onUpdateSearch}/>
                <div class="search-buttons">
                    {buttons}
                    {/* <button class="button" onClick={() => onFilter('')}>Все сотрудники</button>
                    <button class="button" onClick={() => onFilter('rise')}>На повышение</button>
                    <button class="button" onClick={() => onFilter('moreThen1000')}>З/П больше 1000$</button> */}
                </div>
            </section>
        )
    }
}

export default Search;