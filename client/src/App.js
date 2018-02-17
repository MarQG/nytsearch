import React, { Component } from 'react';
import Header from './components/Header';
import SearchPage from './pages/SearchPage';
import ResultsPage from './pages/ResultsPage';
import API from './utils/API';


class App extends Component {
  state = {
    articles: []
  }

  //Adjust later for array of articles
  componentDidMount(){
    API.getArticles()
      .then((res) => this.setState({ articles: [res.data] }))
      .catch((err) => console.log(err));
  }
  
  render() {
    return (
      <div>
        <Header />
        <SearchPage />
        <ResultsPage articles={this.state.articles} />
        <p>This is my awesome bullshit component</p>
      </div>
    );
  }
}

export default App;
