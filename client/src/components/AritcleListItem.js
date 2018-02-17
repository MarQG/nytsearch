import React from 'react';

const ArticleListItem = (props) => (
    <li className="list-group-item">
        {props.article.title}
    </li>
);

export default ArticleListItem;