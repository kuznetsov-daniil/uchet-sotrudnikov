import { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Search from './components/search/search';
import EmployeeList from './components/employee-list/employee-list';
import AddEmployee from './components/add-employee/add-employee';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { name: 'John A', salary: 800, premium: false, increase: true, id: 1},
        { name: 'Alex A', salary: 1000, premium: false, increase: false, id: 2},
        { name: 'Max B', salary: 3000, premium: false, increase: false, id: 3},
      ],
      maxId: 4,
      term: '',
      filter: ''
    }
  }

  searchEmp = (term, items) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term})
  }

  filterEmp = (filter, items) => {
    switch (filter) {
      case 'rise':
        return items.filter(item => item.increase);
      case 'moreThen1000':
        return items.filter(item => item.salary > 1000);
      default:
        return items;
    }
  }

  onFilter = (filter) => {
    this.setState({filter})
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      premium: false,
      increase: false,
      id: this.state.maxId
    }

    this.setState(({data, maxId}) => ({
      maxId: maxId + 1,
      data: [...data, newItem]
    }))
  }

  onTogglePremium = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (id === item.id) {
          return {...item, premium: !item.premium};
        }

        return item;
      })
    }))
  }

  onToggleIncreace = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (id === item.id) {
          return {...item, increase: !item.increase};
        }

        return item;
      })
    }))
  }


  render() {
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.premium).length;
    const {term, data, filter} = this.state;
    const  visibleData = this.filterEmp(filter, this.searchEmp(term, data))
    return (
      <div className="container">
        <Header employees={employees} increased={increased}/>
        <Search onUpdateSearch={this.onUpdateSearch} onFilter={this.onFilter} filter={filter}/>
        <EmployeeList 
          data={visibleData}
          onDelete={this.deleteItem}
          onTogglePremium={this.onTogglePremium}
          onToggleIncreace={this.onToggleIncreace}/>
        <AddEmployee onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
