import React from 'react';
import ArticleListItem from './AritcleListItem';

const ResultsList = (props) => (
    <ul className="list-group">
        {props.articles.length > 0 ? props.articles.map(article => <ArticleListItem article={article} key={article.id}/>) : <h3>No Articles. Try searching for something.</h3>}
    </ul>
);

export default ResultsList;