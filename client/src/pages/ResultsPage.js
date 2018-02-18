import React from 'react';
import PagePanel from '../components/PagePanel';
import ResultsList from '../components/ResultsList';
import API from '../utils/API';

const ResultsPage =(props) => (
        <PagePanel name={`Results`}>
            <ResultsList articles={props.articles}/>
        </PagePanel>
);

export default ResultsPage;