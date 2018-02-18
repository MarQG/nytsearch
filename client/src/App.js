import React, { Component } from 'react';
import Header from './components/Header';
import SearchPage from './pages/SearchPage';
import ResultsPage from './pages/ResultsPage';
import API from './utils/API';


class App extends Component {
  state = {
    search: {
      topic: ""
    },
    articles: []
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      search: {
        ...this.state.search,
       [name]: value
       
      }
    });
  }

  render() {
    return (
      <div>
        <Header />
        <SearchPage handleInputChange={this.handleInputChange} />
        <ResultsPage articles={this.state.articles} />
        <p>This is my awesome bullshit component</p>
      </div>
    );
  }
}

export default App;
