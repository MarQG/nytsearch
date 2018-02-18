import React from 'react';
import PagePanel from '../components/PagePanel';
import SearchForm from '../components/SearchForm';

const SearchPage = (props) =>(
    <PagePanel name={`Search`}>
        <SearchForm handleInputChange={props.handleInputChange}/>
    </PagePanel>
);


export default SearchPage;