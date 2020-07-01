import React, { Component}  from 'react';
import './App.css';
import { CardList } from './components/card-lists/card-lists.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  constructor (){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render(){

    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monsters => 
        monsters.name.toLowerCase().includes(searchField.toLowerCase())
        ); 

    return (
      
    <div className="App">
      <h1>Personal Directory</h1>
      <SearchBox
        placeholder='Search Person'
        handleChange={e => {this.setState({ searchField: e.target.value}, () => 
          console.log(this.state));          
        }}
      />
        <CardList monsters={filteredMonsters}/>
    </div>
    )
  }
}

export default App;