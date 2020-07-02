import React, { Component}  from 'react';
import './App.css';
import { CardList } from './components/card-lists/card-lists.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  constructor (){
    super();

    this.state = {
      persons: [],
      searchFieldByName: '',
      searchFieldByPhone: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({persons: users}))
  }

  render(){

    const { persons, searchFieldByName , searchFieldByPhone} = this.state;

    const filteredpersons = persons.filter(persons => (
        persons.name.toLowerCase().includes(searchFieldByName.toLowerCase()) &&
        (persons.phone.replace(/-/g,'').includes(searchFieldByPhone)))
        ); 

    

    return (
      
    <div className="App">
      <h1>Personal Directory</h1>
      <SearchBox
        placeholder='Search Person'
        handleChange={e => {this.setState({ searchFieldByName: e.target.value}, () => 
          console.log(this.state));          
        }}
      />
      &nbsp; &nbsp; &nbsp; &nbsp;
      <SearchBox
        placeholder="Search by Phone"
        handleChange={e => {this.setState({ searchFieldByPhone: e.target.value}, () => 
          console.log(this.state));          
        }}
      />
        <CardList persons={filteredpersons}/>
    </div>
    )
  }
}

export default App;
