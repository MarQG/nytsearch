import React from 'react';

const SearchForm = (props) => (
    <form className="text-center">
        <div className="form-group">
            <label htmlFor="topic">Topic</label>
            <input name="topic" className="form-control" onChange={props.handleInputChange}/>
        </div>
        <div className="form-group">
            <label htmlFor="start-year">Start Year</label>
            <input name="start-year" className="form-control" onChange={props.handleInputChange}/>
        </div>
        <div className="form-group">
            <label htmlFor="end-year">End Year</label>
            <input name="end-year" className="form-control" onChange={props.handleInputChange}/>
        </div>
        <button className="btn btn-primary btn-lg">Search</button>
    </form>
);

export default SearchForm;