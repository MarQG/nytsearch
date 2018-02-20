import React, { Component } from 'react';
import Header from './components/Header';
import SearchPage from './pages/SearchPage';
import ResultsPage from './pages/ResultsPage';
import SavedArticlesPage from './pages/SavedArticlesPage';
import API from './utils/API';


class App extends Component {
  state = {
    search: {
      topic: "",
      start_date: "",
      end_date: ""
    },
    articles: [],
    savedArticles: [],
    error: "",
    success: ""
  }

  componentDidMount() {
    API.getSavedArticles().then(res => this.setState({ savedArticles: res.data }));
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

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.setState({ error: ""});

    if(
      this.state.search.topic !== "" 
      && this.state.search.start_date.match(/([12]\d{3}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01]))/) 
      && this.state.search.end_date.match(/([12]\d{3}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01]))/) 
    ){
      console.log("We have submitted the form");
      API.getNytArticles(this.state.search).then( res => this.setState({ articles: res.data }));
    } else {
      this.setState({ error: `Please check that your start and end dates. They must be in YYYYMMDD format.`});
    }
    
   
  }

  handleSaveArticle = (article) => {
    API.saveArticle(article).then(res => {
      if(!res.data.error){
        this.setState({ savedArticles: [ ...this.state.savedArticles, res.data] , error: ""});
      } else {
        this.setState({ error: res.data.error});
      }
    });
  }

  handleDeleteSavedArticle = (id) => {
    console.log('handleDeleteSavedArticle');
    console.log(id);
    API.deleteSavedArticle(id).then(res => {
      if(res.data.success){
        this.setState({ savedArticles: this.state.savedArticles.filter(article => article._id !== id), success: res.data.success});
      } else {
        this.setState({ error: res.data.error, success:""})
      }
    });
  }
 
  render() {
    return (
      <div>
        
        <Header />
        <div className="container text-center">
        
          <SearchPage handleInputChange={this.handleInputChange} handleOnSubmit={this.handleOnSubmit}/>
          {this.state.error ? <h1 className="alert alert-danger">{this.state.error}</h1> : false}
          {this.state.success ? <h1 className="alert alert-success">{this.state.success}</h1> : false}
          <div className="row">
            <div className="col-md-6">
              <ResultsPage articles={this.state.articles} handleSaveArticle={this.handleSaveArticle} />
            </div>
            <div className="col-md-6">
              <SavedArticlesPage savedArticles={this.state.savedArticles} handleDeleteSavedArticle={this.handleDeleteSavedArticle}/>
            </div>
          </div>

        </div>
        
       
      </div>
    );
  }
}

export default App;
