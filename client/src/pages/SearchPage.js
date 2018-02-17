import React from 'react';
import PagePanel from '../components/PagePanel';

class SearchPage extends React.Component {
    state = {
        title: "",
        url: "",
        date: ""
    }

    handleInputChange(){

    }

    handleSubmit(){

    }
    
    render = () =>(
        <PagePanel name={`Search`}>
            <form className="text-center">
                <div className="form-group">
                    <label htmlFor="topic">Topic</label>
                    <input name="topic" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="start-year">Start Year</label>
                    <input name="start-year" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="end-year">End Year</label>
                    <input name="end-year" className="form-control"/>
                </div>
                <button className="btn btn-primary btn-lg">Search</button>
            </form>
        </PagePanel>
    );
}

export default SearchPage;