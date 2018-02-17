import React from 'react';
import ArticleListItem from './AritcleListItem';

const ResultsList = (props) => (
    <ul className="list-group">
        {props.articles.map(article => <ArticleListItem article={article} key={article.id}/>)}
    </ul>
);

export default ResultsList;