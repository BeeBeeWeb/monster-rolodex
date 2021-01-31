import React, { Component } from "react";
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  onSearch = value => {
    this.setState({ searchField: value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    });
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          onSearch={this.onSearch}
          placeholder='Search monsters' />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
