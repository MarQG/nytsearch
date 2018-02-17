import React from 'react';
import PagePanel from '../components/PagePanel';
import ResultsList from '../components/ResultsList';
import API from '../utils/API';

class ResultsPage extends React.Component {
    
    state = {
        articles: []
    }

    componentDidMount = () => {
      API.getArticles()
      .then(res => this.setState({ articles:  res.data }))
      .catch(err => console.log(err));
    }
    

    render=() => (
            <PagePanel name={`Results`}>
                <ResultsList articles={this.state.articles}/>
            </PagePanel>
    );
}

export default ResultsPage;