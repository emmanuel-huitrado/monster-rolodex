import React from 'react';
import { Component } from 'react';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox} from "./components/search-box/search-box.component";

import './App.css';

export class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchMonster: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => {
      this.setState({monsters: users});
    });
  }

  searchHandler = (event) => {
    this.setState({searchMonster: event.target.value});
  }

  render(){
    const { monsters, searchMonster } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchMonster.toLowerCase()));

    return (
        <div className="App">
          <h1>Monster Rolodex</h1>
          <SearchBox placeholder='Search Monster' searchHandler={this.searchHandler} />
          <CardList monsters={filteredMonsters} />
        </div>
    );
  }
}

export default App;
