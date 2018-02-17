import React from 'react';

const PagePanel = (props) => (
    <div className="container text-center">
        <div className="panel panel-default">
            <div className="panel-heading">
                <h2>{props.name ? props.name : `Page Panel`}</h2>
            </div>
            <div className="panel body">
                { props.children }
            </div>
        </div>
        
    </div>
);

export default PagePanel;